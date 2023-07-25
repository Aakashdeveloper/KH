let Nikki = {
    id:881,
    name:"Nikki",
    city:"Amsterdam",
    age:27,
    getDetails: function() {
        console.log(`${this.name} + ${this.age}`)
    }
}

Nikki.getDetails()




function test1() {
    return 'Hii from Test1'
}

test()

///IFFI

(function test(){
    return 'Hii from Test'
}())