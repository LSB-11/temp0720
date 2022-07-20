const btn1 = document.createElement("button");
const txt1 = document.createTextNode("버튼1");

const btn2 = document.createElement("button");
const txt2 = document.createTextNode("버튼2");

const btn3 = document.createElement("button");
const txt3 = document.createTextNode("버튼3");

const btn4 = document.createElement("button");
const txt4 = document.createTextNode("버튼4");

const btn5 = document.createElement("button");
const txt5 = document.createTextNode("버튼5");
btn1.append(txt1);
btn2.append(txt2);
btn3.append(txt3);
btn4.append(txt4);
btn5.append(txt5);

document.querySelector("body").append(btn1);
document.querySelector("body").append(btn2);
document.querySelector("body").append(btn3);
document.querySelector("body").append(btn4);
document.querySelector("body").append(btn5);

btn1.addEventListener("click", function () {
  alert("HELLO WORLD");
});
btn2.addEventListener("click", function () {
  alert("HELLO WORLD");
});

btn3.addEventListener("click", function () {
  alert("HELLO WORLD");
});

btn4.addEventListener("click", function () {
  alert("HELLO WORLD");
});

btn5.addEventListener("click", function () {
  alert("HELLO WORLD");
});
