var nome = "Micol";
var eta = 23;

console.log (nome + " " + eta);




let item = document.querySelector('.toggle');
let panel = document.querySelector('.panel');

item.addEventListener("click", function() {
   
    panel.classList.toggle('active');
});




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




