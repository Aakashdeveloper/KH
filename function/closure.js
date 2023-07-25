// function foo(){
//     let b = 10;

//     function inner(){
//         return b;
//     }

//     return inner()
// }


// let myClosure = foo()


// console.log(myClosure)
// console.log(myClosure)
// console.log(myClosure)

function outer(){
    let arr = [];
    let i;

    for (i=0;i<5;i++){
        arr[i] = function(){return i;}
    }

    return arr
}


let getOut = outer()
getOut[1]()
5
getOut[2]()
5
getOut[3]()
5


function mul(a,b,c){
    return a*b*c
}

mul(4,6,7)

/////Currying
function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(2)(3)(4)

///////
5!
5*4*3*2*1 = 120


function fact(n){
    if(n==0 || n ==1){
        return 1
    }else{
        return n*fact(n-1)
    }
}

fact(5)
120
fact(6)
720


let  a = "pArIs"

a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()
"Paris"