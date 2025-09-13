//1 Definir elementos

const numb = document.querySelector(".num");
const btnMenos = document.querySelector(".menos");
const btnMas = document.querySelector(".mas");

let iCont = 0;

const pantalla = document.querySelector(".obj1");
const bd = document.querySelector("body");

//2 Crear funcion

function incrementar(){
    iCont++
    numb.textContent = iCont

    if (iCont === 10){

    pantalla.style.background = "red";
    numb.style.marginLeft = "50%";

} if (iCont >= 30 ){

    bd.style.backgroundColor = "red";
    pantalla.style.display = "flex";
    pantalla.style.flexDirection = "column";
    pantalla.style.justifyContent = "center";
    btnMas.style.marginLeft = "50%";
    btnMenos.style.marginLeft = "50%";
}
    
    else {
    pantalla.style.background = "beige";
}

}

function decrementar(){
     iCont--
    numb.textContent = iCont

    if (iCont <= 10){

    pantalla.style.background = "chocolate";

}if (iCont <= 30 ){

    bd.style.backgroundColor = "beige";

} else {
    pantalla.style.background = "beige";
}
}

//3 Evento

btnMas.addEventListener("click",incrementar);
btnMenos.addEventListener("click",decrementar);