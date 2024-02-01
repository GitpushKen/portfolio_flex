 const presentation = document.querySelector(".presentation")
const pagePres = document.querySelector(".pagePres")

const projets = document.querySelector(".projets")
const pagePro = document.querySelector(".pageProjets")

const chara = document.querySelector(".chara")
const pageChara = document.querySelector(".pageChara")

const contact = document.querySelector(".contact")
const pageContact = document.querySelector(".pageContact")



let presOn = true; 
let myAudio = document.querySelector('#audio')

if (presOn){
    togglePres()
}
function togglePres(){
    presentation.classList.toggle("active")
    pagePres.classList.toggle("active")
    presentation.removeEventListener("click", togglePres)

}

function toggleProjets(){
    projets.classList.toggle("active")
    pagePro.classList.toggle("active")
    projets.removeEventListener("click", toggleProjets)

}

function toggleChara(){
    chara.classList.toggle("active")
    pageChara.classList.toggle("active")
    chara.removeEventListener("click", toggleChara)

}

function toggleContact(){
    contact.classList.toggle("active")
    pageContact.classList.toggle("active")
    contact.removeEventListener("click", toggleContact)

}

function toggleOffPres(){
    chara.classList.remove("active")
    pageChara.classList.remove("active")

    projets.classList.remove("active")
    pagePro.classList.remove("active")

    contact.classList.remove("active")
    pageContact.classList.remove("active")


    projets.addEventListener("click", toggleProjets)
    chara.addEventListener("click", toggleChara)
    contact.addEventListener("click", toggleContact)

}

function toggleOffProj(){
    presentation.classList.remove("active")
    pagePres.classList.remove("active")

    chara.classList.remove("active")
    pageChara.classList.remove("active")

    contact.classList.remove("active")
    pageContact.classList.remove("active")


    presentation.addEventListener("click", togglePres)
    chara.addEventListener("click", toggleChara)
    contact.addEventListener("click", toggleContact)

}

function toggleOffChara(){
    projets.classList.remove("active")
    pagePro.classList.remove("active")


    contact.classList.remove("active")
    pageContact.classList.remove("active")


    presentation.classList.remove("active")
    pagePres.classList.remove("active")

    contact.addEventListener("click", toggleContact)
    presentation.addEventListener("click", togglePres)
    projets.addEventListener("click", toggleProjets)

}

function toggleOffContact(){
    chara.classList.remove("active")
    pageChara.classList.remove("active")

    presentation.classList.remove("active")
    pagePres.classList.remove("active")

    projets.classList.remove("active")
    pagePro.classList.remove("active")


    presentation.addEventListener("click", togglePres)
    projets.addEventListener("click", toggleProjets)
    chara.addEventListener("click", toggleChara)
}

presentation.addEventListener("click", togglePres)
projets.addEventListener("click", toggleProjets)
chara.addEventListener("click", toggleChara)
contact.addEventListener("click", toggleContact)

presentation.addEventListener("click", toggleOffPres)
projets.addEventListener("click", toggleOffProj)
chara.addEventListener("click", toggleOffChara)
contact.addEventListener("click", toggleOffContact)
