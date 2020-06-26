const menuIcons = document.querySelector(".menuIcons");
const line = document.querySelectorAll('.no-active');
const menu = document.querySelector(".menu");
const body = document.querySelector('body')
const btnWrapper = document.querySelector('.mainWrapper')

/*EVENT MENU*/
/*
Ecoute sur le bouton pour ajouter la classe "active"
et retirer la classe "no-active" qui empeche l'activation
de l'animation au chargement de la page
*/
menuIcons.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    btnWrapper.classList.toggle('menu-actived');
    body.classList.toggle('menu-actived');;
    for (const element of line) {
        element.classList.remove('no-active');
    }
});

const email = document.querySelector('#email');
const btnSubmit = document.querySelector('#btnSubmit');
const name = document.querySelector('#lastName');
const textarea = document.querySelector('#textarea');
const p = document.createElement('p');

let emailRegex = /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
let nameRegex = /^[A-Z][A-Za-z\\é\\è\\ê\-]+$/
let textIsGood = textarea.value > 0;
let nameIsGood = name.value.length > 0 && !NaN && nameRegex
btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(nameIsGood)
})
console.log(nameRegex.test("Ludovic@gmail.com"))
console.log(emailRegex.test("Ludovic@gmail.com"))