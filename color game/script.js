var numsquare = 6;
var color = generaterandomColor(numsquare);
var square = document.querySelectorAll('.square');
var pickedcolor = pickcolor();
var displaycolor = document.querySelector('.rgb');
var message = document.querySelector('#msg');
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");


easybtn.addEventListener("click", function () {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquare = 3;
    color = generaterandomColor(numsquare);
    pickedcolor = pickcolor();
    displaycolor.textContent = pickedcolor;
    for (var i = 0; i < square.length; i++) {
        if (color[i]) {
            square[i].style.backgroundColor = color[i];
        } else {
            square[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = 'brown';
})

hardbtn.addEventListener("click", function () {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numsquare = 6;
    color = generaterandomColor(numsquare);
    pickedcolor = pickcolor();
    displaycolor.textContent = pickedcolor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i];

        square[i].style.display = "block";

    }
    h1.style.backgroundColor = 'brown';

})

reset.addEventListener("click", function () {
    color = generaterandomColor(numsquare);
    pickedcolor = pickcolor();
    displaycolor.textContent = pickedcolor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor = 'brown';


})


displaycolor.textContent = pickedcolor;

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color[i];

    square[i].addEventListener('click', function () {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor === pickedcolor) {
            message.textContent = 'correct!';

            reset.textContent = "Play Again?";
            changecolor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
        } else {
            this.style.backgroundColor = 'rgb(19, 16, 24)';
            message.textContent = 'Try Again!!';
        }
    });
}

function changecolor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}


function pickcolor() {
    var random = Math.floor(Math.random() * color.length) + 1;
    return color[random];


}

function generaterandomColor(num) {
    // make an array
    var arr = []
    //add number of olor of array to array
    for (var i = 0; i < num; i++) {
        arr.push(randomcolor())

    }

    return arr;
}

function randomcolor() {
    var r = Math.floor(Math.random() * 256) + 1;
    var b = Math.floor(Math.random() * 256) + 1;
    var g = Math.floor(Math.random() * 256) + 1;
    return "rgb(" + r + ", " + g + ", " + b + ")";
}