class Courier{
  constructor(weight,destination,source,bookedBy){
    this.weight = weight;
    this.destination = destination;
    this.source = source;
    this.bookedBy = bookedBy
  }

  bookCourier(){
    this.price = this.weight > 20 ? 200 :100;
    return `Courier Booked The Price is ${this.price}`
  }

  showCourier(){
    return `This courier is headed to ${this.destination}. It was booked by ${this.bookedBy} at ${this.source} and weighs a total of ${this.weight}`
  }
}


let choice = -1;
do{
  let myCourier = new Courier(28,"Delhi","Mumbai","Kunal")
  console.log(" Choose on : \n1 Book Courier\n2. See Details \n3. Quit")
  choice = parseInt(prompt("Enter your choice: "))
  switch(choice){
    case 1:
      console.log(myCourier.bookCourier())
      break;
    case 2:
      console.log(myCourier.showCourier())
      break;
    case 3:
      console.log(`Thank you for using`)
      break;
    default:
      console.log('Wrong Input')
  }
} while(choice > 0 && choice < 3);
