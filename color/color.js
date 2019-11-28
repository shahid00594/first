var colorbox = "";
var boxcolor1 = document.querySelector("#box1");
var boxcolor2 = document.querySelector("#box2");
var boxcolor3 = document.querySelector("#box3");
var boxcolor4 = document.querySelector("#box4");
var boxcolor5 = document.querySelector("#box5");
var boxcolor6 = document.querySelector("#box6");

boxcolor1.addEventListener("click", function () {
  colorbox = boxcolor1;
});
boxcolor2.addEventListener("click", function () {
  colorbox = boxcolor2;
});
boxcolor3.addEventListener("click", function () {
  colorbox = boxcolor3;
});
boxcolor4.addEventListener("click", function () {
  colorbox = boxcolor4;
});
boxcolor5.addEventListener("click", function () {
  colorbox = boxcolor5;
});
boxcolor6.addEventListener("click", function () {
  colorbox = boxcolor6;
});

function colorchange(y) {
  colorbox.style.backgroundColor = y;
}