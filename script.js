var nome = "Micol";
var eta = 23;

console.log (nome + " " + eta);



let item = document.querySelector('.toggle');
let panel = document.querySelector('.panel');

item.addEventListener("click", function() {
   
    panel.classList.toggle('active');
});

window.onscroll = function() {myFunction()};
var header = document.getElementsByClassName("menu")[0];
var sticky = header.offsetTop;

function myFunction(){
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


/*
let count = 1;
const link = document.querySelector("#link");
const counterDiv = document.querySelector("#counter");

counterDiv.innerHTML = count;
link.addEventListener("click", function(event) {
  event.preventDefault();
  count = count+1
  counterDiv.innerHTML = count;
  console.log(count);
})
*/



