// Data Required   >>>> Done
// Add book in array >>> Done
// Remove a book >>> Done
// Search book by title >>> Done
// Add rating to book >>> Done
// Add reviews of book >>> Done
// Calaculate rating  >>> Done

let books = [
    {
        "id":1,
        "title":"Eloquent JavaScript, Third Edition",
        "author":"Marijn Haverbeke",
        "pages":472,
        "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "cost":390,
        "rating":[5],
        "review":[
            {
                "id":"1.1",
                "text":"Very Good",
                "name":"Amit",
                "rating":4.5
            },
            {
                "id":"1.2",
                "text":"Good",
                "name":"Nikita",
                "rating":4.1
            }
        ]
    },
    {
        "id":2,
        "title":"Practical Modern",
        "author":"Nicolas Bevacqua",
        "pages":334,
        "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
        "cost":510,
        "rating":[5],
        "review":[
            {
                "id":"2.1",
                "text":"Not Very Good",
                "name":"Amar",
                "rating":3.8
            },
            {
                "id":"2.2",
                "text":"Good",
                "name":"Shruti",
                "rating":4.3
            }
        ]
    },
    {
        "id":3,
        "title":"Pro Git",
        "author":"Scott Chacon and Ben Straub",
        "pages":334,
        "description":"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
        "cost":258,
        "rating":[5],
        "review":[
            {
                "id":"3.1",
                "text":"Book looks good",
                "name":"Rahul",
                "rating":3.5
            },
            {
                "id":"3.2",
                "text":"More details required",
                "name":"Anchal",
                "rating":3.9
            }
        ]
    },
    {
        "id":4,
        "title":"Rethinking Productivity in Software Engineering",
        "author":"Caitlin Sadowski, Thomas Zimmermann",
        "pages":134,
        "description":"Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
        "cost":658,
        "rating":[5],
        "review":[
            {
                "id":"4.1",
                "text":"Good",
                "name":"Shiv",
                "rating":4.5
            },
            {
                "id":"4.2",
                "text":"Very Good",
                "name":"Rohit",
                "rating":4.9
            }
        ]
    }
]

function avgRating(data){
    let avgVal = 0
    for(let i =0;i<books.length;i++){
        for(let j = 0 ; j<books[i].review.length;j++){
            avgVal = books[i].review[j].rating+avgVal 
        }
        let avgRating = avgVal/books[i].review.length
        books[i].rating = avgRating
    }   
}

// Add New Book
let userInput = {
    "id":5,
    "title":"Speaking JavaScript",
    "author":"Axel Rauschmayer",
    "pages":510,
    "description":"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "cost":460,
    "rating":5,
    "review":[]
}
//let userInput = prompt("Enter your book")
function addBook(originalArray,userInput){
    originalArray.push(userInput)
    console.log(originalArray)
}


//remove book
const removeBook = (data,userid) => {
    let out = data.filter((item) => {
        return item.id !== userid
    })
    return out
}


// Search book
function searchBooks(data,title){
    let out = data.filter((item) => {
        return (
            item.title.toLowerCase().indexOf(title.toLowerCase())>-1 ||
            item.description.toLowerCase().indexOf(title.toLowerCase())>-1
        )
    })

    return out
}

// add rating
function addRating(data,bookId,rating){
    data.map((item) => {
        if(item.id == bookId){
            item.rating.push(rating)
        }
    })

    return true
}

// add review
let reveiw = {
    "id":"1.3",
    "text":"Nice Book",
    "name":"Yatin",
    "rating":3.1
}
function addReview(data,bookId,review){
    data.map((item) => {
        if(item.id == bookId){
            item.review.push(review)
        }
    })

    return true
}

///////////////
