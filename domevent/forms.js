const validateFname = () => {
   let name = document.getElementById('fname').value;
   let fdiv = document.getElementsByClassName('fdiv')[0];
   if(name.trim().length == 0){
       document.getElementById('fout').innerText="Please enter firstName";
       fdiv.classList.remove('has-success')
       fdiv.classList.add('has-error')
   }else{
        document.getElementById('fout').innerText=""
        fdiv.classList.remove('has-error')
        fdiv.classList.add('has-success')
   }
}


const validateLName = () => {
    let lname = document.getElementById('lname').value; 
    if(lname.trim().length > 8){
        document.getElementById('lout').innerText="Length should be less than 8";
    }else{
        document.getElementById('lout').innerText=""
    }
}


function myDown(){
    document.getElementById('ename').style.background="green"
}

function myUp(){
    document.getElementById('ename').style.background="skyblue"
}


const mouseDown = () => {
    document.getElementById('myP').style.color="orange"
}

const mouseUp = () => {
    document.getElementById('myP').style.color="purple"
}