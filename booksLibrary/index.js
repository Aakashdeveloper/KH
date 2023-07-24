let booksArray = [
    {
        id:1,
        title:'Learn JavaScript Es6',
        author:'Dan brown',
        ratings:4
    }
]

function NBooks(title,author,rating){
    this.id = Math.floor(Math.random()*1000000)
    this.title = title;
    this.author = author;
    this.ratings = rating;
    this.reviews = [];
}


const BookClass = {
    books: [],

    //Add a book
    addBook:function(){
        let bookId =  Math.floor(Math.random()*1000000)
        let bookTitle = document.getElementById('bookTitle').value;
        let bookAuthor = document.getElementById('bookAuthor').value;
        let bookRating = document.getElementById('bookRating').value;
        let book = {id:bookId,title:bookTitle,author:bookAuthor,rating:bookRating}
        // if(this.books.length > 0) {
        //     this.books.map((item) => {
        //         console.log(item.title)
        //         if(item.title !== bookTitle){
        //             this.books.push(book)
        //         }
        //     })
        // }else{
        //     this.books.push(book)
        // }
        this.books.push(book)
        console.log(this.books)
        //localStorage.setItem('books',JSON.stringify(this.books))
        display()
    }
}


let bookAddButton = document.getElementById('addButton')
bookAddButton.addEventListener("click",() => {
    BookClass.addBook()
})


//Display book in div

function display(allBook){
    let content = "";
    //let books = JSON.parse(localStorage.getItem('books'))
    let books = BookClass.books
    // console.log(books)
    //let books;
    // if(allBook){
    //     if(allBook.length > 0 ){
    //         books = allBook
    //     }
    // }else{
    //     books = BookClass.books
    // }
    
    books.forEach((book) => {
        let displayBook=` <div class="bookDiv">
            <h3>${book.id}</h3>
            <h2 class="bookTitle">${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>AvgRating: ${book.rating} star</p>
            <button onClick="removeBooks(${book.id})">Remove</button>
        </div>`
        content += displayBook
    })
    
    document.getElementById('bookList').innerHTML=content
}

const removeBooks = (id) => {
    console.log(`id is ${id}`)
    BookClass.books.map((data,index) => {
            if(data.id == id){
                BookClass.books.splice(index,1)
            }
        })
    display()
}

const filterBooks = () => {
    let userTitle = document.getElementById('search').value
    let output = BookClass.books.filter((item) => {
        return item.title.toLowerCase().indexOf(userTitle.toLowerCase()) >-1
    })
    display(output)
}



// let a = [
//     {id: 96080, title: 'a', author: 'b', rating: '1'},
//     {id: 807444, title: 'c', author: 'd', rating: '2'},
//     {id: 644671, title: 'e', author: 'f', rating: '3'},
//     {id: 123, title: 'e', author: 'f', rating: '3'},
// ]

// a.map((data,index) => {
//     if(data.id == 644671){
//         a.splice(index,1)
//     }
// })


// let a = [
//     {id: 96080, title: 'a', author: 'b', rating: '1'},
//     {id: 807444, title: 'ac', author: 'd', rating: '2'},
//     {id: 644671, title: 'e', author: 'f', rating: '3'},
//     {id: 123, title: 'de', author: 'f', rating: '3'},
// ]

// a.filter((item) => {
//     return item.title.toLowerCase().indexOf('a') >-1
// })