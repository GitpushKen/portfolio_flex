
const all = document.querySelector(".all")
const allMobile = document.querySelector(".allMobile")

$(window).on("resize", function () {
    largeur = $(window).width(); //si tu veux la hauteur de la fenetre utilises .height()
    if (largeur < 950) {
        allMobile.classList.toggle('active')
        all.classList.toggle('inactive')
    }
}) 