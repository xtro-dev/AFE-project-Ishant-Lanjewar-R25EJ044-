document.getElementById("date").innerHTML =
new Date().toDateString();

const search=document.getElementById("search");

search.addEventListener("keyup",function(){

let filter=search.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.innerText.toLowerCase();

card.style.display=
title.includes(filter)
?
"block"
:
"none";

});

});

const btn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300)

btn.style.display="block";

else

btn.style.display="none";

}

btn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

document.querySelectorAll(".card button").forEach(button=>{

button.onclick=function(){

button.innerHTML="❤️ Liked";

}

});
