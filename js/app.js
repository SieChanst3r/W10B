var Giraffe = document.getElementById("giraffe").innerHTML;

var Owl = document.getElementById("owl").innerHTML;

var Dog = document.getElementById("dog").innerHTML;


function setCookie() {
    Cookies.set("selection", "Giraffe");
    window.open("selection.html");
}

function setCookieTwo() {
    Cookies.set("selection", "Owl");
    window.open("selection.html");
}

function setCookieThree() {
    Cookies.set("selection", "Dog");
    window.open("selection.html");
}