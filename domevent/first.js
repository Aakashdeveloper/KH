document.getElementsByClassName('title')
HTMLCollection(5) [h3.title, h3.title, h3.title, h3.title, h3.title]

document.getElementsByClassName('title')[0].innerText ="Skills"
'Skills'

document.querySelector('.title')
<h3 class=​"title">​Skills​</h3>​
document.querySelectorAll('.title')
NodeList(5) [h3.title, h3.title, h3.title, h3.title, h3.title]
document.querySelectorAll('h3')
NodeList(6) [h3.title, h3.title, h3, h3.title, h3.title, h3.title]



document.getElementById('mytitle')
<h3 class=​"title" id=​"mytitle">​Tech​</h3>​


document.querySelector('#mytitle')
<h3 class=​"title" id=​"mytitle">​Tech​</h3>​

document.querySelectorAll('.title')
NodeList(5) [h3#mytitle.title, h3.title, h3.title, h3.title, h3.title]
document.querySelector('#mytitle9')


document.getElementsByClassName('title')
document.querySelectorAll('.title')


document.getElementById('mytitle')
<h3 class=​"title" id=​"mytitle">​Tech​</h3>​
document.querySelector('#title')
null
document.querySelectorAll('#title')
NodeList []

document.getElementsByClassName('title').style.color="red"
VM4950:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:53
(anonymous) @ VM4950:1
document.getElementsByClassName('title')[0].style.color="red"
'red'
document.querySelectorAll('.title').style.color="red"
VM5057:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:48


let data = document.querySelectorAll('.title')
data.forEach((data) => {
    data.style.color="red"
})

