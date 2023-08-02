const preFillForm = () => {
    let url = window.location.href;
    let query = url.split('?')[1].split('&')
    let restName = query[0].split('=')[1].replaceAll('%20',' ')
    let cost = query[1].split('=')[1];
    let restId = query[2].split('=')[1];
    let id = Math.floor(Math.random()*10000)
    document.getElementById('rid').value = id
    document.getElementById('restaurants').value = restName
    document.getElementById('cost').value = `Rs.${cost}`
    document.getElementById('restId').value = restId
}