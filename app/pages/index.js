var x = document.getElementsByName("logo-center")[0];

function myFunction() {
    x.style.animation = "blur 30s"; // Standard syntax
}

x.addEventListener("animationstart", myStartFunction);

function myStartFunction() {
    var myVar = setTimeout(function () {
        window.location.href = "app/pages/home/home.html"
    }, 5000);
}