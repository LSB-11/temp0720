function showAlert() {
  alert("야호");
}

const sampleBtn = document.querySelector(".sample-btn")
// console.log(sampleBtn);
// sampleBtn.addEventListener("click", showAlert)           
sampleBtn.addEventListener("click", function () {
  alert("HELLO WORLD")
});