const myLibrary = [];
const submitButton = document.getElementById('button_form');

function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

submitButton.onclick = function addBookToLibrary() {
  const name = document.getElementById('book-name').value;
  const author = document.getElementById('book-author').value;
  const genre = document.getElementById('book-genre').value;
  myLibrary.push(new Book(name, author, genre));
};