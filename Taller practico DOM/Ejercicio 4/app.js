let userInput = document.querySelector("#userTxt");
let btn = document.querySelector("#btn");
let txt = document.querySelector(".txt");

function btnOnClick() {
    txt.innerHTML = userInput.value;
}

btn.addEventListener("click", btnOnClick);