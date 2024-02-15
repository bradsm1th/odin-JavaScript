const myObject = {
    prop: 'Val!',
    otherProp: 77,
    'obnoxious prop': function (){
        return "Do you really need to be like that?";
    }
};

console.log(myObject['obnoxious prop']());

// make an object constructor
function Book(title, author, pages, is_read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.is_read = is_read;
    this.info = function() {
        return `
        ${this.title} by 
        ${this.author} is 
        ${this.pages} pages long, and 
        ${this.is_read ? "has been finished" : "hasn't been finished yet"}`;
    }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", 3021, false);
console.log(theHobbit.info())