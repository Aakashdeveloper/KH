class Person{
    constructor(name,id,city){
        this.name = name;
        this.id = id
        this.city = city
    }

    userDetails(){
        return `Roll No ${this.id} is of ${this.name} from ${this.city}`
    }
}

class Doctor extends Person {}

class Student extends Person {
    constructor(name,id,city,houseNumber){
        super(name,id,city);
        this.houseNumber = houseNumber
    }

    userDetails(){
        return `Roll No ${this.id} is of ${this.name} from ${this.city} with houseNumber 
        ${this.houseNumber}`
    }
}


let Rohit = new Student('Rohit',1,'Pune',29)

let Ankit = new Person()

let John = new Person('John',1,'Amsterdam')
undefined
John
Person {name: 'John', id: 1, city: 'Amsterdam'}
John.userDetails()
'Roll No 1 is of John from Amsterdam'

let Nisha = new Student('Nisha',2,'Venice')
Nisha.userDetails()
'Roll No 2 is of Nisha from Venice'
