const myLibrary = [];
const submitButton = document.getElementById('button_form');
const listBooks = document.getElementById('list-books');
const title = document.getElementById('book-title');
const author = document.getElementById('book-author');
const beenRead = document.getElementById('book-been-read');
const pages = document.getElementById('book-pages');
const genre = document.getElementById('book-genre');
const toggleForm = document.getElementById('toggle-form');

function initialize() {
  toggleForm.innerText = 'show form';
}

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

submitButton.onclick = function addBookToLibrary() {
  myLibrary.push(new Book(title.value, author.value, pages.value, beenRead.value, genre.value));
  showBooks();
  clearForm();
};

initialize();