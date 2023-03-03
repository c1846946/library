function displayBook(book) {
  //create a div to put content in
  const libraryContainer = document.querySelector(".library-container");
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = book.info();
  libraryContainer.appendChild(bookContainer);
  bookContainer.appendChild(content);

  //change button
  const changeBtn = document.createElement("button");
  changeBtn.classList.add("changeBtn");
  changeBtn.setAttribute("onclick", "changeRead(event)");
  changeBtn.textContent = "Change Status";
  bookContainer.appendChild(changeBtn);

  //add remove button
  const rmvButton = document.createElement("button");
  rmvButton.classList.add("rmvBtn");
  //set onclick attr
  rmvButton.setAttribute("onclick", "removeListings(event)");
  rmvButton.textContent = "Remove Listing";
  bookContainer.appendChild(rmvButton);

  setDataAtt();
}

function changeRead(evt) {
  myLibrary[evt.target.dataset.index].change();
}

function removeListings(evt) {
  //console.log(evt);
  const libraryContainer = document.querySelector(".library-container");
  const listings = document.querySelectorAll(".book-container");
  //remove specific div
  libraryContainer.removeChild(listings[evt.target.dataset.index]);
  //remove object from array
  myLibrary.splice(evt.target.dataset.index, 1);
  console.log(myLibrary);
  setDataAtt();
}

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
};

Book.prototype.index = function () {
  return myLibrary.indexOf(this);
};

Book.prototype.change = function () {
  const listings = document.querySelectorAll(".content");

  if (this.haveRead == "have read") {
    this.haveRead = "haven't read";
    //select div with index/data-attribute and update text content
    listings[this.index()].textContent = this.info();
  } else if (this.haveRead == "haven't read") {
    this.haveRead = "have read";
    listings[this.index()].textContent = this.info();
  }
};

function setDataAtt() {
  //queryselectorall using class
  const listings = document.querySelectorAll(".book-container");
  //set data attribute 0 and up based on their order
  for (let i = 0; i < listings.length; i++) {
    //set data-index to i
    listings[i].querySelector(".changeBtn").setAttribute("data-index", i);
    listings[i].querySelector(".rmvBtn").setAttribute("data-index", i);
    listings[i].setAttribute("data-index", i);
  }

  //listings.forEach((content) => console.log(listings.indexOf(content)));
}

//remove button removes div containing button and takes data attribute as index for removing object from array using splice(index,1)

let myLibrary = [
  {
    title: "Moby Dick",
    author: "Herman Melville",
    pages: 892,
    haveRead: "have read",
    info: function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
    },
    index: function () {
      return myLibrary.indexOf(this);
    },
    change: function () {
      const listings = document.querySelectorAll(".content");

      if (this.haveRead == "have read") {
        this.haveRead = "haven't read";
        //select div with index/data-attribute and update text content
        listings[this.index()].textContent = this.info();
      } else if (this.haveRead == "haven't read") {
        this.haveRead = "have read";
        listings[this.index()].textContent = this.info();
      }
    },
  },
  {
    title: "20,000 Leagues Under the Sea",
    author: "Jules Verne",
    pages: 465,
    haveRead: "haven't read",
    info: function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
    },
    index: function () {
      return myLibrary.indexOf(this);
    },
    change: function () {
      const listings = document.querySelectorAll(".content");

      if (this.haveRead == "have read") {
        this.haveRead = "haven't read";
        //select div with index/data-attribute and update text content
        listings[this.index()].textContent = this.info();
      } else if (this.haveRead == "haven't read") {
        this.haveRead = "have read";
        listings[this.index()].textContent = this.info();
      }
    },
  },
];

myLibrary.forEach((book) => displayBook(book));

function addBookToLibrary(evt) {
  evt.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const hasRead = document.getElementById("has-read").value;
  //enter parameters
  myLibrary.push(new Book(title, author, pages, hasRead));
  displayBook(myLibrary[myLibrary.length - 1]);

  const form = document.getElementById("myForm");
  form.reset();
}

submit = document.getElementById("submit");
submit.addEventListener("click", addBookToLibrary);
rmvBtn = document.querySelectorAll(".rmvBtn");
