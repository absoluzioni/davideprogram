let titolo = document.querySelector("h6");
let pagina = document.querySelector("body");
let fumetto = document.querySelector('#fumetto');

fumetto.addEventListener("click", function() {
    fumetto.classList.add("display-none");
});

titolo.addEventListener("click", function() {
    fumetto.classList.remove("display-none");
});