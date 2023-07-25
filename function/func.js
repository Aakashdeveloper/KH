let a = 10;
let b = 20;
a+b
30

let c = 10
let d = 24
a+b
34

keyword  nameoffunction(parameters){
    return 
}

function sum(a,b){
    return a+b
}

sum(3,8)
11

sum(9,5)
14


const sub = (a,b) => {
    return a-b
}

sub(4,8)
-4

function greet(name){
    return `Hi from ${name}`
}

greet('Aakash')
'Hi from Aakash'


///Pure
function test(userInput){
    return userInput+10
}

console.log(test(45))
console.log(test(4))
console.log(test(26))


function userUpper(name){
    return name.toUpperCase()
}
userUpper("Knowledge")
'KNOWLEDGE'
userUpper("JavaScript")
'JAVASCRIPT'


//impure
let out = 0;
function inc(){
    out++;
}

inc()
console.log(out)
1

inc()
console.log(out)
2


function genRandom(){
    return Math.random()*100
}

genRandom()
27.384432966305482
genRandom()
0.4014790489753173

Pure
> Does not modify the state of application
> Only depend on its input
> eaiser to test
> eaiser to maitain

Impure
> Can modify the state of application
> does not  depend on its input
> harder to test
> harder to maitain