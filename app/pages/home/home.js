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

let getPlaces = () =>{
    places=[];
    places.push(document.querySelector("#from").value);
    places.push(document.querySelector("#destiny").value);
    return places;
}

function revertInput(){
    let p = getPlaces(); // Transformar em uma classe para melhor visualização
    document.getElementById("destiny").value = p[0];
    document.getElementById("from").value = p[1];
}
class InvalidCharacters {
    constructor(characters) {
        this.characters = characters;
    }
    get invalidCharacters() {
        return this.characters;
    }
}

function validateChar(event) {
    let x = event.which || event.keyCode;
    let characters = new InvalidCharacters('$&-#@*+');
    if (x == 38 || x == 36 || x == 45 || x == 35 || x == 64 || x == 42 || x == 43) {
        alertify.error('Caractere Inválido, não utilizar: ' + characters.invalidCharacters.toString());
    }

}



let search = document.querySelector('.searchButton');

search.addEventListener('click', function(event) {
    event.preventDefault();

    var choice = confirm(this.getAttribute('data-confirm'));

    let destiny = document.getElementById("destiny").value;
    
    var from = document.getElementById("from").value;

    switch('from'){
        case 'São Paulo': from = 1; break;
        case 'Rio de Janeiro': from = 2; break;
        case 'Curitiba': from = 3; break;
        case 'Brasília': from = 4; break;

    }
    
    if (choice) {
        if(destiny == "" || from == ""){
            window.alert("Escolha destino e local de saída válidos");
        }
        else{
                fetch("http://localhost:3000/patches/").then((response) => {
                response.json().then((patches) => {
                    patches.map((patch) => {
                        if(patch.name === destiny){
                            if(from === 'São Paulo' && patch.destinyId.includes(1)){
                                window.location.replace(`http://127.0.0.1:5500/app/pages/patch/${patch.id}.html`);
                            } else
                            if(from === 'Rio de Janeiro'  && patch.destinyId.includes(2)){
                                window.location.replace(`http://127.0.0.1:5500/app/pages/patch/${patch.id}.html`);
                            } else
                            if(from === 'Curitiba'  && patch.destinyId.includes(3)){
                                window.location.replace(`http://127.0.0.1:5500/app/pages/patch/${patch.id}.html`);
                            } else
                            if(from === 'Brasília' && patch.destinyId.includes(4)){
                                window.location.replace(`http://127.0.0.1:5500/app/pages/patch/${patch.id}.html`);
                            }
                            else { 
                                window.location.replace(`http://127.0.0.1:5500/app/pages/patch/error.html`);
                            }
                        }
                        
                    })
                })
            })
        }

    }
});









