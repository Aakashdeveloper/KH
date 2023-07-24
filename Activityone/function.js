var a = 10
var b = 20
a+b
30

keyword nameoffunction(parameters){
    return data
}

//es5 > Ecma Script 5
//es6 > Ecma Script 6

function add(a,b){
    return a+b
}

add(8,5)
13

add(5,9)
14

add(1,4)
5

function add(a,b){
    return a+b
}

add(8,5)
13
add(5,8)
13

function sub(a,b){
    return a-b
}
undefined
sub(4,3)
1
sub(3,4)
-1

let arr = [10,20,30];
let out = []

for(let val of arr){
    val = val+5
    out.push(val)
}

console.log(arr)
console.log(out)

[10, 20, 30]
[15, 25, 35]


function add(a,b,c){
    console.log(c)
    return a+b+c
}

add(1,2)

convert(1)

function convert(temp){
    let out = (temp * 9/5)+32
    return out
}


33.8

function add(){

}

// arrowfunction //es6
let convert= (temp) => {
    let out = (temp * 9/5)+32
    return out
}

convert(1)
33.8


let mycodr = new convert()

function calculateTax(price,taxRate){
    let tax = price/taxRate
    let out = price+tax;
    return out.toFixed(2)
}

calculateTax(100,10)
110
calculateTax(710,10)
781
calculateTax(710,8.9)
789.7752808988764

let calc = {
    sum:function(a,b){return a+b},
    sub:function(a,b){return a+b}
}

calc.sum(10,9)
19
calc.sub(1,19)
20

let city = "amSterDam"
city.toUpperCase()
'AMSTERDAM'