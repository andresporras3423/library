const myLibrary = [];
const submitButton = document.getElementById('button_form');
const listBooks = document.getElementById('list-books');

function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

function showBooks() {
  myLibrary.forEach((book) => {
    listBooks.innerHTML += `
      <label>name: ${book.name}</label>
      <label>author: ${book.author}</label>
      <label>genre: ${book.genre}</label>
      `;
  });
}

submitButton.onclick = function addBookToLibrary() {
  const name = document.getElementById('book-name').value;
  const author = document.getElementById('book-author').value;
  const genre = document.getElementById('book-genre').value;
  myLibrary.push(new Book(name, author, genre));
  showBooks();
};