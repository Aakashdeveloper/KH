const url = "https://www.googleapis.com/books/v1/volumes"
//Step1 > Read user input
// let searchButton = document.getElementById('searchButton');
// searchButton.addEventListener('click',fetchBooks);

const fetchBooks = async() => {

  let content = ``
  let bookTitle = document.getElementById('bookTitle').value;
  let queryParam = bookTitle.trim().length > 0 ? bookTitle :'StarWar'
  if(bookTitle.trim().length == 0){
      document.getElementById('error').innerText = "Please Enter Search String"
  }
  if(bookTitle.trim().length > 0){
    document.getElementById('error').innerText = "" 
  }
  //Step2 > Call api on the basis of user input
  console.log(`${url}?q=${queryParam}`)
  let response = await fetch(`${url}?q=${queryParam}`,{method:'GET'})
  let data = await response.json()
  let displayData = data.items.map((item) => {
    console.log(item.volumeInfo.imageLinks.smallThumbnail)
    return(
         `<div class="card">
              <div class="imgdiv">
                  <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="text"/>
              </div>
              <div class="contentdiv">
                  <h2>${item.volumeInfo.title}</h2>
                  <p>Author: ${item.volumeInfo.publisher}</p>
                  <p>
                      ${item.volumeInfo.description}
                  </p>
              </div>
          </div>`
    )
    })
    content += displayData

    document.getElementById('content').innerHTML = content;
}