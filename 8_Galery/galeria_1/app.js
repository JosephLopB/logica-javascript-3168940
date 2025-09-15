const cont = document.querySelector("#contenedor");
const btnNx = document.querySelector("#btn1");
const btnBk = document.querySelector("#btn2");
const tTl = document.querySelector("#txt");

let i = 0;

function nx (){
    cont.style.marginLeft = `-${i * 400}px`;
    console.log("funciona");
    i++;

}

function bk (){
    cont.style.marginLeft = `-400px`;
    console.log("funciona");
}

 if (i === 1){

        tTl.innerHTML = "Segunda imagen";


    } if (i === 2){

        tTl.innerHTML = "Tercera imagen";


    } if (i === 3){

        tTl.innerHTML = "Cuarta imagen";


    } if (i === 4){

        tTl.innerHTML = "Quinta imagen";
        i = 0;
    }

btnNx.addEventListener("click",nx);
btnBk.addEventListener("click",bk);