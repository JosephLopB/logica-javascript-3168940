let titL = document.querySelector("h1");
let parrF = document.getElementById("ej2");
let btn = document.getElementsByClassName("ej1")[0];

function btnOnClick() {
    let bd = document.querySelector("body");
    bd.style.backgroundColor = "red";
    alert("Color cambiado");
}

btn.addEventListener("click", btnOnClick);

console.log(titL);
console.log(parrF);
console.log(btn);