let titolo = document.querySelector("h6");
let pagina = document.querySelector("body");

titolo.addEventListener("click", function() {
    pagina.insertAdjacentHTML("beforeend", `
        <div style="position: absolute;top: 50%; left: 50%;">
            <img src="./img/schiappa.png" style="height: 200px;">
            <p style="position: absolute;top: 1%;margin: 0;">Sei proprio una schiappa!!!</p>
        </div>
    `);
});