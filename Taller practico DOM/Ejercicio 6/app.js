let nm = document.querySelector(".input-text");
let ag = document.querySelector("#age");
let btn = document.querySelector(".btn");
let tx = document.querySelector(".parrafo");

function btnOnClick() {
    let nombre = nm.value;
    let edad = ag.value;

    tx.innerHTML = `Hola ${nombre}, tienes ${edad} años.`;
}

btn.addEventListener("click", btnOnClick);