var selectedAnimal = Cookies.get("selection");
var selection = document.getElementById("selected-animal");
selection.innerHTML = selectedAnimal

function ReturnAndRemove() {
    Cookies.remove("selection");
    window.open("index.html");
}