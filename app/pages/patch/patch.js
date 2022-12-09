
let photo          = document.querySelector('#photo')
let city           = document.querySelector('#name')
let days           = document.querySelector('#days')
let about          = document.querySelector('#about')



let patchesSections = document.querySelector('.patches')


function getData(i) {
  fetch("../../../db.json")
    .then( response => response.json() )
    .then( data => {
        if(data.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        // passe o valor de i no parametro
        fillData2(data, i)
    })
} 

function fillData(data, i) {
    photo.setAttribute('src', data.patches[i].photo)
    city.textContent          = data.patches[i].name
    days.textContent          = "A viagem tem duração de " + (data.patches[i].days).toString()  + " dias"
    about.setAttribute('href',`http://127.0.0.1:5500/app/pages/patch/${i+1}.html`)
}


let photos               = document.getElementsByClassName('photo')
let cities               = document.getElementsByClassName('name')
let allDays              = document.getElementsByClassName('days')
let abouts               = document.getElementsByClassName('about')



function fillData2(data, i) {
    photos[i].setAttribute('src', data.patches[i].photo)
    cities[i].textContent        = data.patches[i].name
    allDays[i].textContent       = "A viagem tem duração de " + (data.patches[i].days).toString() + " dias"
    abouts[i].setAttribute('href',`http://127.0.0.1:5500/app/pages/patch/${i+1}.html`)

}

function setCard(id) {
    let card = document.createElement("article")
    card.setAttribute('class', 'card')
    patchesSections.appendChild(card)

    let imagem = document.createElement("img")
    card.appendChild(imagem)
    imagem.setAttribute('class', 'photo')
    imagem.setAttribute('src', '/assets/resources/images/disney.jpeg')


    let nome = document.createElement("h2")
    nome.setAttribute('class', 'name')
    card.appendChild(nome)
    nome.textContent = "Nome"

    let dias = document.createElement("h2")
    dias.setAttribute('class', 'days')
    card.appendChild(dias)
    dias.textContent = "Quantidade de Dias" 

    let sobre = document.createElement("a")
    card.appendChild(sobre)
    sobre.setAttribute('class', 'about')
    sobre.setAttribute('src', 'http://127.0.0.1:5500/app/pages/patch/1')


    getData(id)
}


getData(0)

setCard(1)
setCard(2)
