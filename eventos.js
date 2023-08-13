document.addEventListener("DOMContentLoaded", function () {
    const elDiv = document.getElementById("elDiv");
    const botoncito = document.getElementById("botoncito");


    elDiv.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    botoncito.addEventListener("click", function (evento) {
    alert("¡Hola!");
    evento.stopPropagation(); 
    });

});