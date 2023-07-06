// Global let a = 10;

function display(value){
    // functional let b = 10
    document.getElementById('result').value += value;
}

function calculate(){
    var p =  document.getElementById('result').value;
    var q = eval(p);
    document.getElementById('result').value = q
}

/*
for(){
   //block let b = 10 
   var a = 10
}

if(){
//block let b = 10 
}
*/