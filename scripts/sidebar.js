
const button = document.querySelector(".button1")
const navigation = document.querySelector(".menu")

const id = document.querySelector(".ID")
const idBurger = document.querySelector(".IDburger")
const identity = document.querySelector(".identity")

const os = document.querySelector(".OS")
const osBurger = document.querySelector(".OSburger")
const system = document.querySelector('.system')
const panel = document.querySelector('.panel')


button.addEventListener("click", toggleNav)

function toggleNav(){
    button.classList.toggle("active")
    navigation.classList.toggle("active")
}

/* ID */

id.addEventListener("click", toggleID)

function toggleID(){
        id.classList.toggle("active")
        identity.classList.toggle("active")
        idBurger.classList.toggle("down")
        osBurger.classList.toggle("down")

}

button.addEventListener("click", toggleOffID)

function toggleOffID(){
        id.classList.remove("active")
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

button.addEventListener("click", toggleOffOS)

function toggleOffOS(){
        os.classList.remove("active")
        system.classList.remove("active")
}


