const APP_NAME = "yo yo yo";

const my_library = [
    ['Calvin and Hobbes', 'Bill Watterson', 8000, true],
    ['Dune', 'Frank Herbert', 900, true]
];
const book_list_el = document.querySelector('.book_list');

const list_books_button = document.querySelector('#list_books');
list_books_button.addEventListener('click', list_books);

// create book list from book state 
function list_books() {
    const books = my_library;
    console.log(books, "<- books?");
    books.forEach((book) => {
        let li_el = document.createElement('li');
        li_el.innerHTML = `<em>${book}</em> by somebody`;
        book_list_el.appendChild(li_el);
    });
}


// book constructor
function Book(title, author, pages, read) {
    this.title = title;     // str
    this.author = author;   // str
    this.pages = pages;     // int
    this.is_read = read;    // bool

    toggle_is_read = function() {
        this.is_read = !this.is_read;
    }
}

// for the button
function add_book_to_library(evt) {
    evt.preventDefault();
    console.log(evt, "<- evt");
    for (let i = 0; i < evt.target.form.length; i++) {
        console.log(evt.target.form[i].value, "<- a form data?");
    }
    // console.log(evt.target.form[0].value, "<- evt.target.form");
    // console.log("button yo");
}

// listener for the button
let add_button = document.querySelector('fieldset button');
add_button.addEventListener('click', add_book_to_library)