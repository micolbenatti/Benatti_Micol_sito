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