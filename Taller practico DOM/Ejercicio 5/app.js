let bg = document.querySelector("body");
let btnR = document.querySelector(".btnR");
let btnV = document.querySelector(".btnV");
let btnA = document.querySelector(".btnA");

btnR.addEventListener("click", function() {
    bg.style.backgroundColor = "red";
});

btnV.addEventListener("click", function() {
    bg.style.backgroundColor = "green";
});

btnA.addEventListener("click", function() {
    bg.style.backgroundColor = "yellow";
}   );