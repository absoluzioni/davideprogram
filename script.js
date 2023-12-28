let titolo = document.querySelector("h6");
let pagina = document.querySelector("body");
let myHTML = `
    <div id="fumetto">
        <img src="./img/schiappa.png">
        <p> Sei<br/>proprio<br/>una<br/>schiappa!!! </p>
    </div>
`;
titolo.addEventListener("click", function() {
    let fumetto = document.querySelector('#fumetto');
    if (!fumetto) {
        pagina.insertAdjacentHTML("beforeend", myHTML);
        setTimeout(function() {
            let fumetto = document.querySelector('#fumetto');
            fumetto.addEventListener("click", function() {
                fumetto.remove();
            })
        }, 100)
    }
});