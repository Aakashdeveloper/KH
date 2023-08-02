
function getAllOrder(){
    let finalData = []
    fetch(`http://localhost:7800/orders`,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            let restId = Number(item.restId)
            fetch(`http://localhost:4511/restaurants?restaurant_id=${restId}`,{method:'GET'})
            .then((res) =>  res.json())
            .then((data1) => {
                console.log(data1[0])
                finalData.push(data1)
            })
        })

    })

    console.log(finalData)
    // let data = await orders.json();
    

    // let output = data.map(async (item) => {
    //     let restId = Number(item.restId)
    //     let url = `http://localhost:4511/restaurants?restaurant_id=${restId}`
    //     let restaurants = await fetch(url,{method:'GET'})
    //     let rdata = await restaurants.json()
    //     finalData.push(rdata[0])
    // })


    //console.log(finalData)



    // return(
    //     `<div class="card">
    //         <div class="imgDiv">
    //           <img src="${rdata[0].restaurant_thumb}" alt="text"/>
    //         </div>
    //         <div class="textDiv">
    //           <p>${item.name} &nbsp;&nbsp;&nbsp; Rs.${item.cost}</p>
    //           <hr/>
    //           <p>Address: ${rdata[0].rdata}</p>
    //           <p>Rating Text: ${rdata[0].rating_text}</p>
    //         </div>
    //     </div>`
    // )
    // content += displayContent;
    // document.getElementById('pcontent').innerHTML = content
    

}