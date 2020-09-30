var pagecounter = 1;
var myinfo = document.getElementById("myinfo");
var btn = document.getElementById("info");
btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pagecounter + '.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);

        renderHtml(ourData);

    };
    ourRequest.send();
    pagecounter++;
    if (pagecounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHtml(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a bad " + data[i].species + "." + "</p>";
    }

    myinfo.insertAdjacentHTML('beforeend', htmlString);
}



setInterval(display, 1000);

function display() {

    var today = new Date();
    var hrs = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    document.getElementById("current-time").innerHTML = hrs + ":" + min + ":" + sec;

}