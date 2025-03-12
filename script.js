function Book (title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.createBook  = function (){
        return title + ` by ` + author + `, ` + pages + ' pages, ' + read
}

}

function addBookToLibrary() {

  }


const myLibrary = []


const Book1 = new Book ("To Kill a Mockingbird", `Harper Lee`, 281, `read`)
const Book2 = new Book ("1984", `George Orwell`, 328, `read`)
const Book3 = new Book ("The Great Gatsby", `F. Scott Fitzgerald`, 180, `not read yet`)
const Book4 = new Book ("Pride and Prejudice", `Jane Austen`, 279, `read`)
const Book5 = new Book ("The Hobbit", `J.R.R. Tolkien`, 310, `not read yet`)

