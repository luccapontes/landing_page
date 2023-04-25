document.querySelector(".hamburger").addEventListener("click", mostrar_menu)

function mostrar_menu() {
    console.log("hello")
    document.querySelector(".menu").classList.toggle("show-menu")
}