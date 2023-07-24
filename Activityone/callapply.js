let person = {
    fullName:function(){
        return this.firstName+" "+this.lastName
    }
}

let rahul = {
    firstName:'Rahul',
    lastName:'Gupta'
}

person.fullName.call(rahul)
'Rahul Gupta'

person.fullName.apply(rahul)
'Rahul Gupta'


let person = {
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+" "+city+" "+country
    }
}

let rahul = {
    firstName:'Rahul',
    lastName:'Gupta'
}

person.fullName.call(rahul,'Delhi',"India")


let rahul = {
    firstName:'Rahul',
    lastName:'Gupta'
}


person.fullName.call(rahul,'Delhi',"India")
'Rahul Gupta Delhi India'

let data = person.fullName.bind(rahul,'Delhi',"India")
data()

person.fullName.call(rahul,['Delhi',"India"])
'Rahul Gupta Delhi,India undefined'
person.fullName.apply(rahul,['Delhi',"India"])
'Rahul Gupta Delhi India'
person.fullName.apply(rahul,'Delhi',"India")



let person = {
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+" "+subject
    }
}

let subject = ["Hindi","English","Math"]


let nikita = {
    firstName:'Nikita',
    lastName:'Arora'
}

person.fullName.apply(nikita,subject)


let user = ["ASharam", 12345678]

function login(userName,pwd){
    if(user[0].toLowerCase() == userName.toLowerCase() && user[1]==pwd){
        console.log('Login Success')
    }else{
        console.log('Login Fail')
    }
}


login('ASharam',123456789)
Login Fail
undefined
login('ASharam',12345678)
Login Success
undefined
login('ASharam1',12345678)
Login Fail


login('aSharam',12345678)
VM567:5 Login Success
undefined
login('ASharam',12345678)
VM567:5 Login Success

function isEven(userInpt){
    if(userInpt%2 == 0){
        console.log(`${userInpt} is even`)
    }else{
        console.log(`${userInpt} is odd`)
    }
}

isEven(4)
VM584:3 4 is even
undefined
isEven(51)
VM584:5 51 is odd