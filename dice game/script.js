var randomNum1 = Math.floor(Math.random() * 6) + 1; //print 1-6
var randomDiceImage1 = "image/" + "dice" + randomNum1 + ".png"; // inverted-dice-1.png - inverted-dice-6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);



var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "image/" + "dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "draw!";
}

window.addEventListener("click", function () {

    var audio = new Audio('FitGirl.mp3');
    audio.play();

});