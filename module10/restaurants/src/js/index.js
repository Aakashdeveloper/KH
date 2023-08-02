const fetchData = async(id) => {
  let baseUrl = `http://3.17.216.66:4000`
  let url = ''
  if(id == 0){
    url = `${baseUrl}/restaurant`
  }else{
    url = `${baseUrl}/filter/${id}`
  }

    let content = ``
    let respone = await fetch(url,{method:'GET'})
    let data = await respone.json()
    let displayContent = data.map((item) => {
      return(
        `<div class="card">
            <div class="imgDiv">
              <img src="${item.restaurant_thumb}" alt="text"/>
            </div>
            <div class="textDiv">
              <p>${item.restaurant_name} &nbsp;&nbsp;&nbsp; Rs.${item.cost}</p>
              <hr/>
              <p>Address: ${item.address}</p>
              <p>Rating Text: ${item.rating_text}</p>
              <a class="btn" href="placeOrder.html?restName=${item.restaurant_name}&cost=${item.cost}&restId=${item.restaurant_id}">Place Order</a>
            </div>
        </div>`
      )
    })
    content += displayContent;
    document.getElementById('cardDiv').innerHTML = content

}

