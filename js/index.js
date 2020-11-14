const myLibrary = [];
const submitButton = document.getElementById('button_form');
const listBooks = document.getElementById('list-books');
const title = document.getElementById('book-title');
const author = document.getElementById('book-author');
const beenRead = document.getElementById('book-been-read');
const pages = document.getElementById('book-pages');
const genre = document.getElementById('book-genre');
const toggleForm = document.getElementById('toggle-form');
const divForm = document.getElementById('div-form');
const divBooks = document.getElementById('div-books');
const divErrors = document.getElementById('div-errors');
const classes = ['d-none col-6', 'col-6'];
const toggleMessage = ['show form', 'show table'];
const readValue = ['No', 'Yes'];
let toggleVal = 1;

function Book(title, author, pages, beenRead, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.beenRead = beenRead;
}

function showBooks() {
  listBooks.innerHTML = '';
  myLibrary.forEach((book, index) => {
    listBooks.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td> <button onclick="updateReadStatus(${index})">${readValue[book.beenRead]}</button></td>
      <td>${book.genre}</td>
      <td><button onclick="deleteCurrent(${index})">delete</button></td>
    </tr>
      `;
  });
}

function deleteCurrent(index) {
  myLibrary.splice(index, 1);
  showBooks();
}

function updateReadStatus(index) {
  myLibrary[index].beenRead = (Number(myLibrary[index].beenRead) + 1) % 2;
  showBooks();
}

function clearForm() {
  title.value = '';
  author.value = '';
  pages.value = 1;
  beenRead.value = '1';
  genre.value = 'Horror';
}

function toggleVisibility() {
  toggleForm.innerText = 'show form';
  toggleVal = (toggleVal + 1) % 2;
  toggleForm.innerText = toggleMessage[toggleVal % 2];
  divForm.classList.value = classes[toggleVal % 2];
  divBooks.classList.value = classes[(toggleVal + 1) % 2];
}

function showWarningMessages() {
  const listErrors = [];
  divErrors.innerHTML = '';
  if (['', null, undefined].includes(author.value)) listErrors.push('Author cannot be blank');
  if (['', null, undefined].includes(title.value)) listErrors.push('Title cannot be blank');
  if (['', null, undefined].includes(pages.value)) listErrors.push('Number of pages cannot be blank');
  else if (Number.isNaN(pages.value)) listErrors.push('Number of pages must be a number');
  else if (!Number.isInteger(Number(pages.value))) listErrors.push('Number of pages must be an integer');
  else if (pages.value < 1) listErrors.push("Number of pages can't be less than 1");
  if (listErrors.length > 0) {
    listErrors.forEach((error) => { divErrors.innerHTML += `<p>${error}</p>`; });
    return true;
  }
  return false;
}

toggleForm.onclick = function toggleEvent() {
  toggleVisibility();
};

function addBookToLibrary() {
  if (!showWarningMessages()) {
    myLibrary.push(new Book(title.value, author.value, pages.value, beenRead.value, genre.value));
    showBooks();
    clearForm();
  }
}

submitButton.onclick = function formEvent(event) {
  addBookToLibrary();
  event.preventDefault();
};

toggleVisibility();