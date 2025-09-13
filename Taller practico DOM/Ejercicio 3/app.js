let parrafo = document.querySelector(".parrafo");
let btn = document.querySelector(".btn");

function btnOnClick() {
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
}

btn.addEventListener("click", btnOnClick);