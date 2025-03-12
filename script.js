function Book (title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.reportInfo  = function (){
        return title + ` by ` + author + `, ` + pages + ' pages, ' + read
    }
}


const Book1 = new Book ("To Kill a Mockingbird", `Harper Lee`, 281, `read`)


console.log(Book1.reportInfo())