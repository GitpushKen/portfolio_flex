

/* Sidebar */

const buttonM = document.querySelector(".navM");
const kenM = document.getElementById("ken")
const infoM = document.querySelector(".infoM");
const introM = document.querySelector(".introM");
const idM = document.getElementById("idM")
const osM = document.getElementById("osM")
const specsM = document.querySelector(".specsM")
const identitY = document.querySelector(".identitY")
const systeM = document.querySelector(".systeM")
const avatarM = document.querySelector(".avatarM")
const baseM = document.querySelector(".baseM")
const corpsM = document.querySelector(".corpsM")
const back = document.querySelector(".back")

const presM = document.getElementById("presM")
const charM = document.getElementById("charM")
const contM = document.getElementById("contM")

const pagePresM = document.querySelector(".pagePresM")
const pageContM = document.querySelector(".pageContM")
const pageCharM = document.querySelector(".pageCharM")

const enveloppeM = document.querySelector(".enveloppeM")

kenM.addEventListener("click", toggleNavM);

function toggleNavM(){
    buttonM.classList.toggle("active")
    infoM.classList.toggle("active")
    introM.classList.toggle("inactive")
    specsM.classList.toggle("active")
    kenM.classList.toggle("active")
    idM.classList.remove("active")
    osM.classList.remove("active")
    identitY.classList.remove("active")
    systeM.classList.remove("active")
}

/* ID */
idM.addEventListener("click", toggleidM);

function toggleidM(){
    idM.classList.toggle("active")
    osM.classList.remove("active")
    identitY.classList.toggle("active")
    systeM.classList.remove("active")
}

osM.addEventListener("click", toggleosM);

function toggleosM(){
    osM.classList.toggle("active")
    idM.classList.remove("active")
    systeM.classList.toggle("active")
    identitY.classList.remove("active")
}

avatarM.addEventListener("click", toggleAvatarM);

function toggleAvatarM() {
    baseM.classList.toggle("inactive")
    corpsM.classList.toggle("active")
    idM.classList.remove("active")
    osM.classList.remove("active")
    identitY.classList.remove("active")
    systeM.classList.remove("active")
    infoM.classList.remove("active")
    specsM.classList.remove("active")
    kenM.classList.remove("active")
    introM.classList.remove("inactive")
    
}



function toggleback() {
    baseM.classList.toggle("active")
    baseM.classList.remove("inactive")
    corpsM.classList.remove("active")
    corpsM.classList.toggle("inactive")

}



let presMOn = true; 
if (presMOn) {
    togglePresM()
}

function togglePresM() {
    presM.classList.toggle("active")
    pagePresM.classList.toggle("active")
    presM.removeEventListener("click", togglePresM)
}



function toggleContM() {
    contM.classList.toggle("active")
    pageContM.classList.toggle("active")
    contM.removeEventListener("click", toggleContM)
}


function toggleCharM() {
    charM.classList.toggle("active")
    pageCharM.classList.toggle("active")
    charM.removeEventListener("click", toggleCharM)
}

// toggle Off
function toggleOffPresM(){
    charM.classList.remove("active")
    pageCharM.classList.remove("active")
    


    contM.classList.remove("active")
    pageContM.classList.remove("active")
    



    charM.addEventListener("click", toggleCharM)
    contM.addEventListener("click", toggleContM)

}



function toggleOffCharM(){

    contM.classList.remove("active")
    pageContM.classList.remove("active")
    


    presM.classList.remove("active")
    pagePresM.classList.remove("active")
    

    contM.addEventListener("click", toggleContM)
    presM.addEventListener("click", togglePresM)

}

function toggleOffContM(){
    charM.classList.remove("active")
    pageCharM.classList.remove("active")
    

    presM.classList.remove("active")
    pagePresM.classList.remove("active")
    

    presM.addEventListener("click", togglePresM)
    charM.addEventListener("click", toggleCharM)
}

presM.addEventListener("click", togglePresM);
contM.addEventListener("click", toggleContM);
charM.addEventListener("click", toggleCharM);

presM.addEventListener("click", toggleOffPresM)
charM.addEventListener("click", toggleOffCharM)
contM.addEventListener("click", toggleOffContM)

back.addEventListener("click", toggleback);

enveloppeM.addEventListener("click", toggleEnveloppeM)

let contactMon = false;

function toggleEnveloppeM() {
    if (!contactMon) {
        enveloppeM.classList.toggle("active")
        contactMon = true;
    } else {
        sendMailM();
        contactMon = false;
        enveloppeM.classList.remove("active")
    }
}

function sendMailM() {
    window.location.href = "mailto:kenperot@outlook.fr?subject=En%20savoir%20plus&body=";
    console.log("work")
}
