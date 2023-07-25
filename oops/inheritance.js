
//es5
function human(name,city) {
    this.name = name;
    this.city = city
}


function robot(name) {
    this.name = name;
    this.age = 10;
    this.legs = 2
}

let lisa = new human('Lisa','Boston')
let Pepper = new robot('Pepper')

console.log(lisa)
console.log(Pepper)

human.prototype = new robot()
let John = new human('John','Innsburg')
console.log(John)

lisa
human {name: 'Lisa', city: 'Boston'}
lisa.age
undefined
John
human {name: 'John', city: 'Innsburg'}
John.age
10
John.legs
2


//es6
class geo{
    constructor(){
        this.lat = 41.32;
        this.lon = 74.11
    }
}


class language extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country
    }

    greet =() => {
        return `Hi ${this.name} welcome to ${this.country}`
    }
}

let french = new language('French','France')
french
language {lat: 41.32, lon: 74.11, name: 'French', country: 'France', greet: ƒ}