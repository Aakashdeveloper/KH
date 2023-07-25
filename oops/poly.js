class Person{
    display(){
        console.log(`Hi from Person`)
    }
}

class Doctor extends Person{
    display(){
        console.log(`Hi from Doctors`)
    }
}

class Students extends Person{
    display(){
        console.log(`Hi from Students`)
    }
}

let person = new Person()
console.log(person.display())

let person1 = new Doctor()
console.log(person1.display())

let person2 = new Students()
console.log(person2.display())