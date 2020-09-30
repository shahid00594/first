// var first = document.querySelector('#first');
// var second = document.querySelector('#second');
// var third = document.querySelector('#third');
// var btn = document.querySelector('button');
var first = $("h1")[0];
var second = $("h1")[1];
var third = $("h1")[2];

var btn = $("button");

// change color on click
first.addEventListener('click', function () {
	this.style.color = 'red';
	this.style.border = "2px dotted black";
});
//change color on mouse over
second.addEventListener('mouseover', function () {
	this.style.color = 'red';
	this.style.border = "2px dotted black";
});

//change color on scroll
window.addEventListener('scroll', function () {
	third.style.color = 'red';
	third.style.border = "2px dotted black";

});



function reset() {
	// first.style.color = 'black';
	// second.style.color = 'black';
	// third.style.color = 'black';
	$("h1").css("color", "black");
	$("h1").css({
		border: "4px solid black",
	})
}


$("h1").css({

	border: "4px solid black",
	background: "darkcyan"
})