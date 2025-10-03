//  elements
const myLibrary = [];
const wrapper = document.querySelector(".wrapper-div");
const newBtn = document.querySelector(".btn-new");
const closeBtn = document.querySelector(".btn-close");
const dialog = document.querySelector(".modal");
const addBtn = document.querySelector(".btn-add");
const removeBtn = document.querySelectorAll(".remove-btn");
const checkBtn = document.querySelectorAll(".check");

// the constructor
function Book(name, author, pages, read, id) {
  (this.name = name),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
  this.id = id;
}

function addBookToLibrary(name, author, pages, read, id) {
  id = self.crypto.randomUUID();
  const book = new Book(name, author, pages, read, id);
  myLibrary.push(book);
}

// sample books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Already Read");
addBookToLibrary("1984", "George Orwell", 328, "Already Read");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "Not Yet");

// display sample books
for (const books of myLibrary) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book-div");
  bookDiv.setAttribute("id", books.id);
  bookDiv.innerHTML = `<h2>${books.name}</h2>
  <h3>${books.author}</h3>
  <p>${books.pages} pages</p> 
  <button class="check">${books.read}</button>
  <button class="remove-btn">Remove</button>`;

  wrapper.appendChild(bookDiv);
}

// dialog event listeners
newBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

// add book
addBtn.addEventListener("click", () => {
  const name = document.getElementById("book-name").value;
  const author = document.getElementById("author-name").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked
    ? "Already Read"
    : "Not Yet";

  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book-div");
  bookDiv.innerHTML = `<h2>${name}</h2>
    <h3>${author}</h3>
    <p>${pages} pages</p>
    <button class="check">${read}</button>
    <button class="remove-btn">Remove</button>`;

  wrapper.appendChild(bookDiv);

  if (name === "" || author === "" || pages === "") {
    alert("Please fill in all fields");
    wrapper.removeChild(bookDiv);
    return;
  }
  addBookToLibrary(name, author, pages, read);
});

// remove book
wrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const bookDiv = e.target.parentElement;
    wrapper.removeChild(bookDiv);
    const bookId = bookDiv.getAttribute("id");
    for (const books of myLibrary) {
      if (books.id === bookId) {
        const index = myLibrary.indexOf(books);
        myLibrary.splice(index, 1);
        console.log(myLibrary);
        break;
      }
    }
  }
});

// Check Status

wrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("check")) {
    const bookDiv = e.target;
    if (bookDiv.textContent === "Already Read") {
      bookDiv.textContent = "Not Yet";
    } else {
      bookDiv.textContent = "Already Read";
    }
    const bookId = bookDiv.parentElement.getAttribute("id");
    for (const books of myLibrary) {
      if (books.id === bookId) {
        books.read = bookDiv.textContent;
        console.log(myLibrary);
        break;
      }
    }
  }
});
