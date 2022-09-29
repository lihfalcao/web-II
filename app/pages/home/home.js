let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('../../../assets/resources/images/background.jpg')";
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('../../../assets/resources/images/background-2.jpg')";
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('../../../assets/resources/images/background-3.jpg')";
});
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('../../../assets/resources/images/background-4.jpg')";
});

let i = 0
let images = [ "url('../../../assets/resources/images/background.jpg')", 
               "url('../../../assets/resources/images/background-2.jpg')",
               "url('../../../assets/resources/images/background-3.jpg')",
               "url('../../../assets/resources/images/background-4.jpg')"]
let places =[]


changeImage = function() {

    if(i <= 3){
    document.body.style.backgroundImage = images[i];
    i++}
    if(i > 3){
        i = 0 ;
    }
}

window.onload = (event) => { setInterval(changeImage, 4000)};

getPlaces = () =>{
    places=[];
    places.push(document.querySelector("#from").value);
    places.push(document.querySelector("#destiny").value);
    return places;
}

function revertInput(){
    let p = getPlaces();
    document.getElementById("destiny").value = p[0];
    document.getElementById("from").value = p[1];
}
