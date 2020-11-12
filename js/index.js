const myLibrary = [];
const submitButton = document.getElementById('button_form');
const listBooks = document.getElementById('list-books');
const name = document.getElementById('book-name');
const author = document.getElementById('book-author');
const genre = document.getElementById('book-genre');

function Book(name, author, genre) {
  this.name = name;
  this.author = author;
  this.genre = genre;
}

function showBooks() {
  myLibrary.forEach((book) => {
    listBooks.innerHTML += `
    <tr>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
    </tr>
      `;
  });
}

function clearForm() {
  name.value = '';
  author.value = '';
  genre.value = '';
}

submitButton.onclick = function addBookToLibrary() {
  myLibrary.push(new Book(name.value, author.value, genre.value));
  showBooks();
  clearForm();
};