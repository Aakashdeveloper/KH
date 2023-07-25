// // Global
// let str1 = "Javascript";

// function test(){
//     // functional
//     let str2 = "Knowledge"
//     return str2
// }

// console.log(`str1 >>>> ${str1}`)
// console.log(`str2 >>>> ${str2}`)


// for(let i = 0;i<5;i++){
//     // block scope
//     let str1 = "Javascript"
//     console.log(`This is ${i} ${str1}`)
// }

// console.log(str1)

let password = "test";
let timer = 0


function login(username){
    timer = 10
    return `${username} + ${password} + ${timer}`

}


function login(username){
    timer = 10
    return function(){

    }

}




function inforamtion(username){
    let timer2 = 50
    return `${username} + ${password} + ${timer} + ${timer2}`
}

// console.log(`timer>>>>> ${timer}`)
// console.log(`timer2>>>>> ${timer2}`)

console.log(login('Ankit'))
console.log(inforamtion('Ritika'))


// timer
// timer2



function multiplyByy(y){
    return y*20
}

console.log(`Output of mul is ${multiplyByy(3)}`)
Output of mul is 60


function circle(){
    const pi = 3.14
    function area(r){
       let rsq =  Math.pow(r,2)
       console.log(pi * rsq)
    }
   // console.log(pi * rsq)

}