var a = 31
if(a > 30){
    if(a>35){

    }else{

    }
    console.log('Number is greater than 30')
}else if(a > 20){
    console.log('Number is greater than 20')
}else{
    console.log('Number is not greater than 20') 
}

// ifelse > Can provide multiple condition
//        > Ek se jada condition de skte he

//switch > condition is one on basis of that multiple response
// ternary > only one condition
// Jb sirf ek condition rhega


let uname = "John"

switch(uname){
    case 'Anna':
        console.log('You are admin');
        break;
    case 'John':
        console.log('You are super admin');
        break;
    default:
        console.log('You are user');
}


switch(car == "X1" && brand=="BMW"){
    case true:
    
    case false:
}

////////////////////////////


condition ? 'agr condition shi he ':'agr condition galat he'

let x = 10
x>10?'Hiii':'Biee'
'Biee'
let x = 10
x==10?'Hiii':'Biee'
'Hiii'


let x = 10
x>10?x+1:x-1
9
let x = 10
x==10?x+1:x-1
11

Truthy 
> any number 0 ke alava +ve ya -ve
> koi bhi String
> true

Falsy  
> 0
> false
> null
> undefined

let y;
if(y){
    console.log('ok')
}


let ui = prompt('Enter Your Number')
if(ui%2 == 0){
    console.log('Number is even')
}else{
    console.log('Number is odd')
}


let car = "X1"
let brand = "BMW"

// do condition milni chiye
if(car == "X1" && brand=="BMW"){
    console.log('Ek dum shi')
}


// koi bhi ek condition agr mil gai
if(car == "X1" || brand=="BMW"){
    console.log('Ek dum shi')
}


if((car == "X1" || car == "A6") && (brand=="BMW"||brand=="Audi")){
    console.log('Ek dum shi')
}

let o = true
!o
false

let k = false
!k
true

if((a%2==0) || (a%2==1)){

}

let first = prompt('Enter Your first Number');
let second = prompt('Enter Your  Second Number');
let third = prompt('Enter Your  Third Number');

if((first**2 + second**2) == third**2){
    console.log('Yes shi he')
}else{
    console.log('Galat he')
}


let mydata = [4,8,12,43,9]

for(start,condition,increment){}

for(i=0;i<5;i++){
    console.log(i)
}


let mydata = [4,1,8,3,12,43,80,9]
for(i=0;i<mydata.length;i++){
    if(mydata[i]%2 == 0){
        console.log('Number is even')
    }else{
        console.log('Number is odd')
    }
}

let sum = 0
for(let i=0;i<10;i++){
    sum = sum+i
}


var city = ["Delhi","London","Amsterdam","Boston"]
for(data of city){
    console.log(data)
}


var a = {
    "name":"Apple",
    "color":"blue",
    "taste":"Sweet"
}

var a = {
    "name":"Apple",
    "color":"blue",
    "taste":"Sweet"
}

for(prop in a){
    console.log(prop)
}
VM791:8 name
VM791:8 color
VM791:8 taste
undefined
for(prop in a){
    console.log(a[prop])
}
VM808:2 Apple
VM808:2 blue
VM808:2 Sweet

for(let i = 1; i<11;i++){
    out = 9 * i
    lout = "9 * "+i+" = "+out
    console.log(lout)
}


c => f

(50 * 9/5) +32

// is prime

function isPrime(n){
    if(n <= 1){
        return false
    }


    for(let i = 2;i<n;i++){
        if(n%i == 0){
            return false
        }

        return true
    }

}