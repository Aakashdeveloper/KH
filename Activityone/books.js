var books = [
        {
            "isbn":"1",
            "title":"Eloquent JavaScript, Third Edition",
            "subtitle":"A Modern Introduction to Programming",
            "author":"Marijn Haverbeke",
            "published":"2018-12-04T00:00:00.000Z",
            "publisher":"No Starch Press",
            "rating":10,
            "pages":472,
            "review":[
                {
                    "id":1,
                    "value":"Good"
                },
                {
                    "id":2,
                    "value":"Very Good"
                }
            ],
            "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
            "website":"http://eloquentjavascript.net/"
        },
        {
            "isbn":"2",
            "title":"Practical Modern JavaScript",
            "subtitle":"Dive into ES6 and the Future of JavaScript",
            "author":"Nicolás Bevacqua",
            "published":"2017-07-16T00:00:00.000Z",
            "publisher":"O'Reilly Media",
            "rating":9,
            "pages":334,
            "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
            "website":"https://github.com/mjavascript/practical-modern-javascript"
        },
        {
            "isbn":"3",
            "title":"Understanding ECMAScript 6",
            "subtitle":"The Definitive Guide for JavaScript Developers",
            "author":"Nicholas C. Zakas",
            "published":"2016-09-03T00:00:00.000Z",
            "publisher":"No Starch Press",
            "pages":352,
            "rating":8,
            "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
            "website":"https://leanpub.com/understandinges6/read"
        },
        {
            "isbn":"4",
            "title":"Speaking JavaScript",
            "subtitle":"An In-Depth Guide for Programmers",
            "author":"Axel Rauschmayer",
            "published":"2014-04-08T00:00:00.000Z",
            "publisher":"O'Reilly Media",
            "pages":460,
            "rating":8,
            "description":"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
            "website":"http://speakingjs.com/"
        }
]


books.push(
    {
        "isbn":"5",
        "title":"You Don't Know JS Yet",
        "subtitle":"Get Started",
        "author":"Kyle Simpson",
        "published":"2020-01-28T00:00:00.000Z",
        "publisher":"Independently published",
        "pages":143,
        "review":[
            {
                "id":1,
                "value":"ok"
            },
            {
                "id":2,
                "value":"not Good"
            }
        ],
        "description":"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
        "website":"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
    }
)

// remove books
function remove(books,userInput){
    let out = books.filter((item) => {
        return item.isbn !== userInput.toString()
    })
    return out
}


//search books
function search(books,title){
    let out = books.filter((item) => {
        return item.title.toLowerCase().indexOf(title.toLowerCase())>-1
    })
    return out
}

//add rating
function addRating(books,rating,bookId){
    books.map((item) => {
        if(item.isbn === bookId.toString()){
            item.rating = rating
        }
    })

    return 'ok'
}

// add review

function addReview(books,rating,review){
    books.map((item) => {
        if(item.isbn === bookId.toString()){
            item.review.push(review)
        }
    })

    return 'ok'
}

// avg rating
function avgRating(books){
    let totalRating = 0;
    for(i=0;i<books.length;i++){
        totalRating = totalRating+books[i].rating
    }
    console.log(">>>",totalRating)
    let avgRating = totalRating/books.length
    return `Avg rating is ${avgRating}`
}


Ques>
1) How map and filter are different from each other
2) How to update nested value of Array
3) Can rating have multiple value and how to update
4) How to decide when to use array or Object
5) Can you show how to add new key the all records

