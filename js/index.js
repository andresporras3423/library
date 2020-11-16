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
const beenReadColor = ['btn btn-secondary', 'btn btn-success'];
const readValue = ['No', 'Yes'];
let toggleVal = 1;

function Book(title, author, pages, beenRead, genre) {
  return {title, author, pages, beenRead, genre};
}

function showBooks() {
  function deleteCurrent(index) {
    myLibrary.splice(index, 1);
    showBooks();
  }

  function updateReadStatus(index) {
    myLibrary[index].beenRead = (Number(myLibrary[index].beenRead) + 1) % 2;
    showBooks();
  }

  listBooks.innerHTML = '';
  for (let index = 0; index < myLibrary.length; index += 1) {
    const book = myLibrary[index];
    listBooks.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td> <button class="button-read-status ${beenReadColor[book.beenRead]}">${readValue[book.beenRead]}</button></td>
      <td>${book.genre}</td>
      <td><button class="button-delete btn btn-danger">
      <svg height="15pt" viewBox="0 0 511.992 511.992" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0" fill="white"/></svg>
      </button></td>
    </tr>
      `;
  }
  const buttonsReadStatus = document.getElementsByClassName('button-read-status');
  const buttonsDelete = document.getElementsByClassName('button-delete');
  for (let j = 0; j < buttonsReadStatus.length; j += 1) {
    buttonsReadStatus[j].onclick = function updateReadStatusContainer() { updateReadStatus(j); };
    buttonsDelete[j].onclick = function deleteCurrentContainer() { deleteCurrent(j); };
  }
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
    listErrors.forEach((error) => { divErrors.innerHTML += `<p class="alert alert-warning">${error}</p>`; });
    return true;
  }
  divErrors.innerHTML += '<p class="alert alert-success">book successfully saved!</p>';
  return false;
}

toggleForm.onclick = function toggleEvent() {
  toggleVisibility();
};

function addBookToLibrary() {
  if (!showWarningMessages()) {
    myLibrary.push(Book(title.value, author.value, pages.value, beenRead.value, genre.value));
    showBooks();
    clearForm();
  }
}

submitButton.onclick = function formEvent(event) {
  addBookToLibrary();
  event.preventDefault();
};

function addInitialBooks() {
  myLibrary.push(new Book('The Lord of The Rings', 'J. R. R. Tolkien', 823, 1, 'Fantasy'));
  myLibrary.push(new Book('Harry Potter', 'JK Rowling', 435, 0, 'Fantasy'));
  myLibrary.push(new Book('1984', 'George Orwell', 377, 1, 'Drama'));
  myLibrary.push(new Book('One Hundred Years of Solitude', 'Gabriel García Marquez', 421, 1, 'Drama'));
  myLibrary.push(new Book('Dracula', 'Bram Stoker', 215, 0, 'Horror'));
  showBooks();
}
addInitialBooks();
toggleVisibility();