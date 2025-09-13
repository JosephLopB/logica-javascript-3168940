let prrF = document.querySelector(".normal");
let btn = document.querySelector(".btn");

function btnOnClick() {
    prrF.classList.toggle("resaltado");
};

btn.addEventListener("click", btnOnClick);