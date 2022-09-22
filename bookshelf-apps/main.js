const books = [];
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
const STORAGE_KEY = "BOOKSHELF_APPS";

const generateId = () => {
  return +new Date();
};

const generateBookObject = (id, title, author, year, isCompleted) => {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
};

const isStorageExist = () => {
  if (typeof Storage === undefined) {
    alert("Your browser doesn't support local storage");
    return false;
  }
  return true;
};

const saveData = () => {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
};

const loadDataFromStorage = () => {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
};

const addBook = () => {
  let isCompleted;
  const id = generateId();
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isChecked = document.getElementById("inputBookIsComplete").checked;
  if (isChecked) {
    isCompleted = true;
  } else {
    isCompleted = false;
  }

  const bookObject = generateBookObject(id, title, author, year, isCompleted);
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
};

document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

const findBookById = (id) => {
  for (const book of books) {
    if (book.id === id) {
      return book;
    }
  }
  return null;
};

const findBookIndexById = (id) => {
  for (const index in books) {
    if (books[index].id === id) {
      return index;
    }
  }

  return -1;
};

const addBookToCompleted = (id) => {
  const bookTarget = findBookById(id);

  if (bookTarget === null) return;

  bookTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
};

const removeBook = (id) => {
  const bookTarget = findBookIndexById(id);

  if (bookTarget === -1) return;

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
};

const undoBookFromCompleted = (id) => {
  const bookTarget = findBookById(id);

  if (bookTarget === null) return;

  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
};

const makeBook = (bookObject) => {
  const article = document.createElement("article");
  article.classList.add("book_item");

  const title = document.createElement("h3");
  title.innerText = bookObject.title;

  const author = document.createElement("p");
  author.innerText = `Penulis ${bookObject.author}`;

  const year = document.createElement("p");
  year.innerText = `Tahun ${bookObject.year}`;

  const action = document.createElement("div");
  action.classList.add("action");
  article.setAttribute("id", `book-${bookObject.id}`);

  if (bookObject.isCompleted) {
    const buttonDone = document.createElement("button");
    buttonDone.classList.add("green");
    buttonDone.innerText = "Unread";
    buttonDone.addEventListener("click", () => {
      undoBookFromCompleted(bookObject.id);
    });

    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("red");
    buttonRemove.innerText = "Delete";
    buttonRemove.addEventListener("click", () => {
      removeBook(bookObject.id);
    });
    action.append(buttonDone, buttonRemove);
  } else {
    const buttonDone = document.createElement("button");
    buttonDone.classList.add("green");
    buttonDone.innerText = "Already read";
    buttonDone.addEventListener("click", () => {
      addBookToCompleted(bookObject.id);
    });

    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("red");
    buttonRemove.innerText = "Delete";
    buttonRemove.addEventListener("click", () => {
      removeBook(bookObject.id);
    });
    action.append(buttonDone, buttonRemove);
  }

  article.append(title, author, year, action);

  return article;
};

document.addEventListener(RENDER_EVENT, () => {
  const uncompletedBooks = document.getElementById("incompleteBookshelfList");
  uncompletedBooks.innerHTML = "";

  const completedBooks = document.getElementById("completeBookshelfList");
  completedBooks.innerText = "";

  for (const book of books) {
    const bookElement = makeBook(book);
    if (!book.isCompleted) uncompletedBooks.append(bookElement);
    else completedBooks.append(bookElement);
  }
});
