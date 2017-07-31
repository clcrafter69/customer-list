//wire up html

var bookTitle = document.getElementById("book-title"),
    bookAuthor = document.getElementById("book-author"),
    bookAuthorLast =document.getElementById("book-author-last"),
    bookList = document.getElementById("book-list"),
    addButton = document.getElementById("add-button"),
    authorList = [];



var book = function Book (bookAuthor, bookAuthorLast, bookTitle)
{
    this.authorFirst = bookAuthor;
    this.authorLast = bookAuthorLast;
    this.bookName = bookTitle;

    this.toString = function toString(){
       return this.bookName + " " + this.authorFirst + " " + this.authorLast;
   }
}

// create book list

var createBookList = function createBookList()
{
    //clear the div
    bookList.innerText = "";

    //build the book list
    for (var i =0; i < authorList.length; i++)
        {
            bookList.innerText += i + " : " + authorList[i].toString() + "\n";
        }
};


addButton.addEventListener("click", function()
{
    var newBook = new book(bookAuthor.value,bookAuthorLast.value,bookTitle.value);
    authorList.push(newBook);
    createBookList();

});
