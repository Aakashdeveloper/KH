class Vehicle{
    constructor(manufacturer, model, year){
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year
    }

    getInfo(){
        return `${this.manufacturer} made ${this.model} in the year ${this.year}`
    }
}


class Car extends Vehicle{
    constructor(manufacturer,model,year,fuelType){
        super(manufacturer,model,year);
        this.fuelType = fuelType
    }

    getCarInfo(){
        return this.getInfo()+ ` The fuel type is ${this.fuelType}`
    }
}


let testCar = new Car("MG","Hector",2023,"Petrol")
testCar.getInfo()
'MG made Hector in the year 2023'
testCar.getCarInfo()
'MG made Hector in the year 2023 The fuel type is Petrol'