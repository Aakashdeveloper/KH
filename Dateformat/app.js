var moment = require('moment');
let a = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(a)


let b = moment().subtract(10, 'days').calendar()
console.log(b)