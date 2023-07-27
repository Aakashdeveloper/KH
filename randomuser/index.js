const url = "https://randomuser.me/api/"

function fetchUser() {
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
}


let myInterval = setInterval(fetchUser,3000)