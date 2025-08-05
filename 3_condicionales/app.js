/* 
        //Ejercicio 1

alert ("Control de ingreso a la disco 😎");

let nombre = (prompt("Escibe tu Nombre"));

if (nombre == "carlos" || nombre == "mario"){
    alert("Ingresa VIP");
} else {
    alert("Verifiquemos tu edad")
}

let edad = Number (prompt("Escribe tu edad"))

if (edad >= 18) {
    alert("Ingresa sin problemas")
} else {
    alert("Vuelve cuando tengas 18")
}

 */

        //Ejercicio 2

let estatura = Number(prompt("Por favor, ingresa tu estatura en centímetros"));
let velocidad = Number(prompt("Por favor, ingresa tu velocidad en km/h"));
let edad = Number(prompt("Por favor, ingresa tu edad"));

let estaturaMin =  170;
let velocidadMin =  27;

if (estatura >= estaturaMin && velocidad >= velocidadMin) {
    if (edad < 18) {
        alert("¡Felicidades! Cumples con los requisitos. Serás asignado a las Divisiones Menores.");
    } else {
        alert("¡Felicidades! Cumples con los requisitos. Serás asignado al Equipo Profesional.");
    }
} else {
    alert("Lo sentimos, no cumples con los requisitos de estatura y/o velocidad para ingresar al equipo.");
}