document.getElementsByTagName('a')[0]
<a href=​"https:​/​/​www.facebook.com/​aakash.handa.14" target=​"_blank">​…​</a>​
document.getElementsByTagName('a')[1]
<a href=​"https:​/​/​www.linkedin.com/​in/​aakash-handa-01629954/​" target=​"_blank">​…​</a>​
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText = "I m from KH"
'I m from KH'
document.getElementsByTagName('h1')[0].style.color="red"
'red'
document.getElementsByTagName('h1')[0].style.display="none"
'none'
document.getElementsByTagName('h1')[0].style.display="block"
'block'

document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]0: a.scroll1: a.scroll2: a.scroll3: a.scroll4: a.scrolllength: 5[[Prototype]]: HTMLCollection
document.getElementsByClassName('scroll')[1].innerText = "Videos"
'Videos'