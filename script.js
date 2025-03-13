let myLibrary = []

const modal = document.getElementById("bookModal");
const openModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(id, title, author, pages, read){
  const bookObject = new Book(title, author, pages, read) 
  myLibrary.push(bookObject)
  getLastBookId()
}

function getLastBookId(){
  return myLibrary[myLibrary.length-1].id
}



const submitBtn = document.querySelector(`.submit-btn`)

submitBtn.addEventListener(`click`, () => { 
      checkForm()
    })



function changeInput(title, author, pages, read) {

    const inputAuthor = document.querySelector(`#author`)
    author.textContent = `Author: ${inputAuthor.value}`;

    const inputTitle = document.querySelector(`#title`)
    title.textContent = `Title: ${inputTitle.value}`;

    const inputPages = document.querySelector(`#pages`)
    pages.textContent = `Pages: ${inputPages.value}`;

    const inputRead = document.querySelector(`#read`)
    
        if(inputRead.checked) {
            read.textContent = `Read: Yes`;
        } else {
            read.textContent = `Read: No`;
        }   

      addBookToLibrary(title, author, pages, read)
;
}

// it needs to check if input is entered and do not create wrap if it is not 
function checkForm(){

  const formInput = document.querySelectorAll("#title, #author, #pages")

  if (!(formInput[0].value)  ||!(formInput[1].value) || !(formInput[2].value) ) {
    alert('Please enter all the values before adding books!') 
  } else {
    createWrap()
    clearForm(formInput)
    modal.style.display = "none"; 
  }
}

//have to clear everything in the form after sending  
function clearForm(formInput){
  for( let i = 0; i < formInput.length; i++) {
    formInput[i].value = ``;
  }
}

function createWrap(){

      const books = document.querySelector(`.books`)

      const cardWrap = document.createElement("div")
      cardWrap.className = `card-wrap`
      books.appendChild(cardWrap)

      const card = document.createElement("div")
      card.className = `card`
      cardWrap.appendChild(card)

      const title = document.createElement("div")
      title.className = `title`
      card.appendChild(title)


      const author = document.createElement("div")
      author.className = `author`
      card.appendChild(author)


      const pages = document.createElement("div")
      pages.className = `pages`
      card.appendChild(pages)

      const read = document.createElement("div")
      read.className = `read`
      card.appendChild(read)

      const btns = document.createElement("div")
      btns.className = `btns`
      card.appendChild(btns)

      const readBtn = document.createElement("div")
      readBtn.className = `read-btn`
      readBtnText = document.createTextNode("Read");
      readBtn.appendChild(readBtnText)
      btns.appendChild(readBtn)

      const removeBtn = document.createElement("div")
      removeBtn.className = `remove-btn`
      removeBtnText = document.createTextNode("Remove");
      removeBtn.appendChild(removeBtnText)
      btns.appendChild(removeBtn)



      changeInput(title, author, pages, read)
      cardWrap.dataset.id = getLastBookId()

      removeBtn.addEventListener("click", () => {
        cardWrap.remove()
        myLibrary = myLibrary.filter((book) => book.id === getLastBookId())
      })

      if (read.textContent == `Read: Yes`) {
        readBtnText.textContent = `Unread`}

      readBtn.addEventListener("click", () => {
        if (read.textContent == `Read: Yes`) {
            read.textContent = `Read: No`
            readBtnText.textContent = `Read`
        } else if (read.textContent == `Read: No`){
            read.textContent = `Read: Yes`
            readBtnText.textContent = `Unread`
        }
      })
}



const Book1 = new Book ("To Kill a Mockingbird", `Harper Lee`, 281, `read`)
const Book2 = new Book ("1984", `George Orwell`, 328, `read`)
const Book3 = new Book ("The Great Gatsby", `F. Scott Fitzgerald`, 180, `not read yet`)
const Book4 = new Book ("Pride and Prejudice", `Jane Austen`, 279, `read`)
const Book5 = new Book ("The Hobbit", `J.R.R. Tolkien`, 310, `not read yet`)

const textInputs = document.querySelectorAll('input[type="text"]');

// Loop through each input field and add an event listener
textInputs.forEach(input => {
  input.addEventListener('input', function(event) {
    // Use regex to allow only letters (A-Z, a-z)
    const pattern = /^[A-Za-z]*$/;

    // If the value doesn't match the pattern, remove non-letter characters
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^A-Za-z]/g, ''); // Replace non-letter characters
    }
  });
});