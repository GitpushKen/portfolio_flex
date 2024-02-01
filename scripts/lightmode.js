const lightOn = document.getElementById("lightOn")
const lightBase = document.querySelector(".all")
const lightSide = document.querySelector(".menu")

const lightButton = document.querySelector(".button1")

const lightId = document.querySelector(".ID")
const lightIdentity = document.querySelector(".identity")

const lightOs = document.querySelector(".OS")
const lightSystem = document.querySelector(".system")

const lightMain = document.querySelector(".container_main")
const lightNav = document.querySelector(".container_nav")

const lightPres = document.querySelector(".presentation")
const lightPagePres = document.querySelector(".pagePres")

const lightPro = document.querySelector(".projets")
const lightChara = document.querySelector(".chara")
const lightContact = document.querySelector(".contact")


lightOn.addEventListener("click", lightning)

function lightning (){
    lightBase.classList.toggle('light');
    lightSide.classList.toggle('light');

    lightButton.classList.toggle('light');

    lightId.classList.toggle('light');
    lightIdentity.classList.toggle('light');


    lightOs.classList.toggle('light');
    lightSystem.classList.toggle('light');


    lightMain.classList.toggle('light');

    lightNav.classList.toggle('light');

    lightPres.classList.toggle('light');
    lightPagePres.classList.toggle('light');


    lightPro.classList.toggle('light');
    lightChara.classList.toggle('light');
    lightContact.classList.toggle('light');
}


