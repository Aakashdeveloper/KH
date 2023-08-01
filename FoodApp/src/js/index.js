const fetchData =  async(id) => {
    console.log(id)
    let content = ``
    let response = await fetch(`http://3.17.216.66:4000/filter/${id}`,{method:'GET'})
    let data = await response.json();
    let displayData = data[0].restaurant_name
    console.log(displayData)
    content += displayData
    document.getElementById('content').innerHTML = content;



//   let content = ``
//   let bookTitle = document.getElementById('bookTitle').value;
//   let queryParam = bookTitle.trim().length > 0 ? bookTitle :'StarWar'
//   if(bookTitle.trim().length == 0){
//       document.getElementById('error').innerText = "Please Enter Search String"
//   }
//   if(bookTitle.trim().length > 0){
//     document.getElementById('error').innerText = "" 
//   }
//   //Step2 > Call api on the basis of user input

//   let response = await fetch(`${url}?q=${queryParam}`,{method:'GET'})
//   let data = await response.json()
//   let displayData = data.items.map((item) => {
//         //Step3 > Bind data in the ui
//         return(
//             `<div class="card">
//                 <div class="imgdiv">
//                     <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="text"/>
//                 </div>
//                 <div class="contentdiv">
//                     <h2>${item.volumeInfo.title}</h2>
//                     <p>Author: ${item.volumeInfo.publisher}</p>
//                     <p>
//                         ${item.volumeInfo.description}
//                     </p>
//                 </div>
//             </div>`
//         )
//     })
//     content += displayData

//     document.getElementById('content').innerHTML = content;
}

// function getData(params) {
//     alert("hiii")
// }
// npx @knowledgehut/create-js-app my app
