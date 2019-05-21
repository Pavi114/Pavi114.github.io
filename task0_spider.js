var skillbtn = document.querySelector(".skillbtn");
var resumebtn = document.querySelector(".resumebtn");
var contactbtn = document.querySelector(".contactbtn");
var aboutMe = document.querySelector("#aboutme");
var resume = document.querySelector("#resume");
var contact = document.querySelector("#contact");
var intro = document.querySelector(".intro");

skillbtn.addEventListener("click",function(){
	aboutMe.classList.toggle("hidden");
	resume.classList.add("hidden");
	contact.classList.add("hidden");
	intro.style.backgroundColor = "#7b1e7a";

})

resumebtn.addEventListener("click",function(){
	resume.classList.toggle("hidden");
	aboutMe.classList.add("hidden");
	contact.classList.add("hidden");
	intro.style.backgroundColor = "rgb(0, 153, 0)";
})

contactbtn.addEventListener("click",function(){
	contact.classList.toggle("hidden");
	aboutMe.classList.add("hidden");
	resume.classList.add("hidden");
	intro.style.backgroundColor = "rgb(204, 0, 0)";
})

