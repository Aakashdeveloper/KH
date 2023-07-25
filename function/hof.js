function Hof(x,y,fn){
    if(typeof(x) === 'number' && typeof(y) === 'number'){
        return () => fn(x,y)
    }

    return () => null;
}

function add(x,y){
    return x+y
}

function div(x,y){
    return x/y
}

function sub(x,y){
    return x-y
}

// let myAdd = Hof(17, 81, add)
// console.log(myAdd())

// let myDiv = Hof(17, 81, div)
// console.log(myDiv())

let mySub = Hof(17, 81, sub)
console.log(mySub())

let myTest = Hof(17, 'a', sub)
console.log(myTest())