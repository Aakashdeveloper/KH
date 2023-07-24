let arr = [1,2,3,6,8,43,61,65,34] >> Array of Number
let arr1 = ["Hindi","English","Math","Science"] >>> Array of String
let arr2 = [true,false,true,false] >> Array of Boolean

//correct
let arr3 = ["Hii","Hello",4,7,"test",true] 
hemogenious  and  hetrogenious


let arr1 = ["Hindi","English","Math","Science"]
arr1[0]
"Hindi"

arr1[1]
"English"

arr1[2]
"Science"

var a1 = "Delhi"

var city = ["Delhi","Amsterdam","Boston","Venice"]

var admin = []
var user = []



let arr1 = ["Hindi","English","Math","Science"]

arr.push('Computer')



var arr = [1,2,3,6,8,43,61,65,34]

>  var arr = [1,2,3,6,8,43,61,65,34]
undefined
> arr.length
9
> 3
3
> 9/2
4.5
> 9/3
3
> arr.slice(0,3)
[ 1, 2, 3 ]
> arr.slice(4,7)
[ 8, 43, 61 ]
> arr.slice(3,6)
[ 6, 8, 43 ]
> arr.slice(6,9)
[ 61, 65, 34 ]
> 

for(let i=0;i<9;i=i+3){
    console.log(i)
}

function groupArrayElement(arr,n){
    let length = arr.length/n;
    let start = 0;
    let end = 0
    for(let i=0;i<length+n;i=i+n){
        end = end+i
        start= start+end
    }
    console.log(end)
    console.log(start)
    arr.slice(start,end)
}






> var city = ["Delhi","Amsterdam","Boston","Venice"]
undefined
> city.reverse()
[ 'Venice', 'Boston', 'Amsterdam', 'Delhi' ]
> city.push('Pune')
5
> city
[ 'Venice', 'Boston', 'Amsterdam', 'Delhi', 'Pune' ]
> city.pop()
'Pune'
> city.length
4
> city
[ 'Venice', 'Boston', 'Amsterdam', 'Delhi' ]
> city.unshift('Mumbai')
5
> city
[ 'Mumbai', 'Venice', 'Boston', 'Amsterdam', 'Delhi' ]
> city.shift()
'Mumbai'


var city = [ 'Mumbai', 'Venice', 'Boston', 'Amsterdam', 'Delhi' ]
var output = []
const flipString1 = (elem) => {
    output.push(elem.split('').reverse().join(''))
}

city.forEach(flipString1,city)
['iabmuM', 'ecineV', 'notsoB', 'madretsmA', 'ihleD' ]

iabmuM
ecineV
notsoB
madretsmA
ihleD


let data = Array.of("A","B","C")
[ 'A', 'B', 'C' ]

let data1 = Array.from('abc')
> data1
[ 'a', 'b', 'c' ]

let aar2 = Array.from("Javascript")

function createArray(arrLike, mapFunc){
    return Array.from(arrLike,mapFunc)
}

let out = createArray([4,8,10],(ele)=>ele+2)


let arr = [1,2,3,6,8,43,61,65,34]
arr.map((data) => {return data*2})

[2,   4,   6, 12, 16,86, 122, 130, 68]

let a = "Hongkong"
> a[0]
'H'
> a[2]
'n'
> a.charAt(9)
''
> 

let arr = [1,2,3,6,8,43]

for(data of arr){
    console.log(data)
}

let arr4 = [1,2,3,6,8,43,61,65,34]

arr4.splice(index,deletecount,values)
arr4.splice(1,0,99,100)

arr4.splice(4,3)

arr4.splice(4,3,101,102)


function opt(opttype,arr){
    if(opttype == "Add"){
        arr.push()
    } else if(opttype == "remove"){
        arr.pop()
    } else if(opttype=="Print"){
        arr.map((data) => {
            console.log(data)
        })
    }
}

opt([1,2,3,6,8,43,61,65,34],"Add")

let arr = [1,2,3,6,8,43,61,65,34,29,16]
arr.filter((data) => {return data>30})
[ 43, 61, 65, 34 ]


let city = [ 'Mumbai', 'Venice', 'Boston',
let arr9 = [1,2,3,...city,6,8,43]


let books = [
    {
        'title':'Book1',
        'author':'Auth1'
    },
    {
        'title':'Book2',
        'author':'Auth2'
    }
]


let book1 = [
    ...books,
    {
        'title':'Book3',
        'author':'Auth3'
    }
]