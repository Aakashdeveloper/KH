var movies = {
    "name":"Jab We Met",
    "rating":8.3,
    "ind":"Bollywood"
}

> movies.type="Romantic"
'Romantic'
> movies
{ name: 'Jab We Met', rating: 8.3, ind: 'Bollywood', type: 'Romantic' }
> movies.rating = 9.1
9.1
> movies
{ name: 'Jab We Met', rating: 9.1, ind: 'Bollywood', type: 'Romantic' }
> delete movies.ind
true
> movies
{ name: 'Jab We Met', rating: 9.1, type: 'Romantic' }

> movies.name
'Jab We Met'
> movies['name']
'Jab We Met'
> 


let person1 = {
    "name":"Rahul",
    "rollNo":1,
    "address":{
        "hno":10,
        "city":'delhi'
    },
    "officaddres":[
        {
            "hno":11,
           "city":'Mumbai'
        },
        {
            "hno":12,
           "city":'pune'
        }
    ]
}

person1.address.city
'delhi'
> person1.officaddres[0].city
'Mumbai'

let rating = 10

{
    "rating":rating
}

{
    "rating"
}


let [x,y] = [2,6]
// let x = 2
// let y = 6
x = 2
y = 6


let movies = {
    "name":"Jab We Met",
    "rating":8.3,
    "ind":"Bollywood"
}

let person1 = {
    "name":"Rahul",
    "rollNo":1
}

let final = {...movies,...person1}