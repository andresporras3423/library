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
const classes = ['d-none col-6', 'col-6'];
const toggleMessage = ['show form', 'show table'];
let toggleVal = 1;

function Book(title, author, pages, beenRead, genre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.beenRead = beenRead;
}

function showBooks() {
  myLibrary.forEach((book) => {
    listBooks.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.beenRead}</td>
      <td>${book.genre}</td>
    </tr>
      `;
  });
}

function clearForm() {
  title.value = '';
  author.value = '';
  pages.value = 0;
  beenRead.value = 'Yes';
  genre.value = 'Horror';
}

function toggleVisibility() {
  toggleForm.innerText = 'show form';
  toggleVal = (toggleVal + 1) % 2;
  toggleForm.innerText = toggleMessage[toggleVal % 2];
  divForm.classList.value = classes[toggleVal % 2];
  divBooks.classList.value = classes[(toggleVal + 1) % 2];
}

toggleForm.onclick = function toggleEvent() {
  toggleVisibility();
};

function addBookToLibrary() {
  myLibrary.push(new Book(title.value, author.value, pages.value, beenRead.value, genre.value));
  showBooks();
  clearForm();
}

submitButton.onclick = function formEvent(event) {
  addBookToLibrary();
  event.preventDefault();
};

toggleVisibility();