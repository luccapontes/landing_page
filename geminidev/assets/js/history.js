document.querySelector(".card").addEventListener("click", mostrar_historia)

function mostrar_historia() {
    document.querySelector(".card-info").classList.toggle("show-history")
    console.log("passei")
}