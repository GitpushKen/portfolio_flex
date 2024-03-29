

const presentationM = document.querySelector(".presentationM")
const pagePresM = document.querySelector(".pagePresM")

const projetsM = document.querySelector(".projetsM")
const pageProM = document.querySelector(".pageProjetsM")

const charaM = document.querySelector(".charaM")
const pageCharaM = document.querySelector(".pageCharaM")

const contactM = document.querySelector(".contactM")
const pageContactM = document.querySelector(".pageContactM")



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


function toggleChara(){
    chara.classList.toggle("active")
    pageChara.classList.toggle("active")
    chara.removeEventListener("click", toggleChara)

}

let contactMe = false;

function toggleContact(){
    contact.classList.toggle("active")
    pageContact.classList.toggle("active")
    contact.removeEventListener("click", toggleContact)
    contactMe = true;
    registerOn = true;
}

function toggleOffPres(){
    chara.classList.remove("active")
    pageChara.classList.remove("active")


    contact.classList.remove("active")
    pageContact.classList.remove("active")
    contactMe = false;
    registerOn = false;


    chara.addEventListener("click", toggleChara)
    contact.addEventListener("click", toggleContact)

}



function toggleOffChara(){



    contact.classList.remove("active")
    pageContact.classList.remove("active")
    contactMe = false;
    registerOn = false;


    presentation.classList.remove("active")
    pagePres.classList.remove("active")

    contact.addEventListener("click", toggleContact)
    presentation.addEventListener("click", togglePres)

}

function toggleOffContact(){
    chara.classList.remove("active")
    pageChara.classList.remove("active")

    presentation.classList.remove("active")
    pagePres.classList.remove("active")

    presentation.addEventListener("click", togglePres)
    chara.addEventListener("click", toggleChara)
}

presentation.addEventListener("click", togglePres)
chara.addEventListener("click", toggleChara)
contact.addEventListener("click", toggleContact)

presentation.addEventListener("click", toggleOffPres)
chara.addEventListener("click", toggleOffChara)
contact.addEventListener("click", toggleOffContact)

/* context menu */ 

document.addEventListener('contextmenu', function(event){
    event.preventDefault();

    if (!contactMe){
        let menuPerso = document.querySelector('.menu_perso')

    menuPerso.classList.toggle('active');

    let posX = event.clientX;
    let posY = event.clientY;

    let maxX = window.innerWidth - menuPerso.clientWidth - 25;
    let maxY = window.innerHeight - menuPerso.clientHeight - 25;

    if(posX > maxX){
        posX = maxX;
    }

    if(posY > maxY){
        posY = maxY;
    }

    menuPerso.style.top = posY + "px";
    menuPerso.style.left = posX + "px";

    console.log(contactMe);

    } else {

        let menuPerso2 = document.querySelector('.menu_perso2')

        menuPerso2.classList.toggle('active');

        let posX = event.clientX;
        let posY = event.clientY;

        let maxX = window.innerWidth - menuPerso2.clientWidth - 25;
        let maxY = window.innerHeight - menuPerso2.clientHeight - 25;

        if(posX > maxX){
        posX = maxX;
        }

        if(posY > maxY){
        posY = maxY;
        }

        menuPerso2.style.top = posY + "px";
        menuPerso2.style.left = posX + "px";
        }

    
});


document.addEventListener('click', contextMenu);

function contextMenu() {
    document.querySelector(".menu_perso").classList.remove("active");
    document.querySelector(".menu_perso2").classList.remove("active");
}


function displayHold() {
    document.removeEventListener('click', contextMenu)
}


const register = document.querySelector('.register')




let registerOn = false;

function registerAll2(){
    registerOn = false;
    console.log(registerOn);
}


function registerSetup(){
    
    if (!registerOn) {

        toggleContact();

        toggleOffContact();

        document.querySelector(".menu_perso").classList.remove("active")
        document.querySelector(".menu_perso2").classList.remove("active")

        registerOn = true;
        console.log(registerOn);
        } else {
                document.querySelector(".menu_perso").classList.remove("active")
                document.querySelector(".menu_perso2").classList.remove("active")
                console.log(registerOn);
            }

    }



register.addEventListener('click', registerSetup)


const iconMail = document.querySelector(".icon2")

iconMail.addEventListener('click', sendMail)

function sendMail(){
    window.location.href = "mailto:kenperot@outlook.fr?subject=En%20savoir%20plus&body=";
    console.log("work")
}

/* Sidebar */

const button = document.querySelector(".button1")
const navigation = document.querySelector(".menu")

const idM = document.querySelector(".IDM")
const idBurgerM = document.querySelector(".IDburgerM")
const identityM = document.querySelector(".identityM")

const osM = document.querySelector(".OSM")
const osBurgerM = document.querySelector(".OSburgerM")
const systemM = document.querySelector('.systemM')
const panelM = document.querySelector('.panelM')


button.addEventListener("click", toggleNav)

function toggleNav(){
    button.classList.toggle("active")
    navigation.classList.toggle("active")
}

/* ID */

idM.addEventListener("click", toggleIDM)

function toggleIDM(){
        idM.classList.toggle("active")
        identity.classList.toggle("active")
        idBurger.classList.toggle("down")
        osBurger.classList.toggle("down")

}

buttonM.addEventListener("click", toggleOffID)

function toggleOffID(){
        idM.classList.remove("active")
        identity.classList.remove("active")
        idBurger.classList.remove("down")
        osBurger.classList.remove("down")
}

/* OS */

os.addEventListener("click", toggleOS)

function toggleOS(){
        os.classList.toggle("active")
        system.classList.toggle("active")
}

buttonM.addEventListener("click", toggleOffOS)

function toggleOffOS(){
        os.classList.remove("active")
        system.classList.remove("active")
}

/* Mobile */




