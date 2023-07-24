let data = [
    {
        "id":1,
        "name":"Birthday",
        "seats":10,
        "image":"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        "id":2,
        "name":"Buffet Breakfast",
        "seats":6,
        "image":"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
    },
    {
        "id":3,
        "name":"Movie",
        "seats":3,
        "image":"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
    },
    {
        "id":4,
        "name":"Buffet Lunch",
        "seats":0,
        "image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80"
    },
    {
        "id":5,
        "name":"Buffet Dinner",
        "seats":20,
        "image":"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
    }
]

function eventDisplay(){
    let display = ""
    data.map((event) => {
        item = `<div class="tile" style="background-image:url('${event.image}')">
            <h2>${event.name}</h2>
            <p>Seat Left: ${event.seats}</p>
            <h4 id="ava"></h4>
            <button id=${event.id}>Book now</button>
        </div>`
        display += item;
    })
    document.getElementById('mainContainer').innerHTML=display;


    let eventButtons = document.querySelectorAll('button');

    eventButtons.forEach((button) => {
        button.addEventListener('click',() => checkAvalibility(button))
    })


    const checkAvalibility = (button) => {
        let buttonId = button.id;
        let seatCount = data?data[buttonId-1].seats:0;
        let avTest = document.querySelectorAll('h4')[buttonId-1]
        seatCount <= 0? avTest.innerText='Not Avaliable': avTest.innerText='Avaliable'
    }
}

const toggleMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')
}