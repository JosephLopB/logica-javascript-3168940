// Ejercicio 1 

/* function verificarNumero() {
    let numero = prompt("Por favor, ingrese un número:");
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        console.log("Entrada no válida. Por favor, ingrese un número válido.");
        return;
    }
    console.log("El número que ingresó es: " + numero);
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
}
verificarNumero(); */

//Ejercicio 2

/* function imprimirPositivos() {
    let num1 = prompt("Por favor, ingrese el primer número:");
    num1 = parseFloat(num1);
    let num2 = prompt("Por favor, ingrese el segundo número:");
    num2 = parseFloat(num2);
    if (num1 > 0) {
        console.log("Primer número positivo: " + num1);
    }
    if (num2 > 0) {
        console.log("Segundo número positivo: " + num2);
    }
}
imprimirPositivos(); */

// Ejercicio 3

/* function operacionesCondicionales() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let resultado;
    if (num1 === num2) {
        resultado = num1 * num2;
        console.log("Los números son iguales, por lo que se multiplican. Resultado: " + resultado);
    } else if (num1 > num2) {
        resultado = num1 - num2;
        console.log("El primer número es mayor, por lo que se restan. Resultado: " + resultado);
    } else {
        resultado = num1 + num2;
        console.log("El primer número no es mayor ni igual, por lo que se suman. Resultado: " + resultado);
    }
}
operacionesCondicionales(); */

//Ejercicio 4

/* function calcularCambio() {
    let costo = prompt("Ingrese el costo del artículo:");
    costo = parseFloat(costo);
    let dineroEntregado = prompt("Ingrese la cantidad de dinero entregada por el cliente:");
    dineroEntregado = parseFloat(dineroEntregado);
    if (isNaN(costo) || isNaN(dineroEntregado) || dineroEntregado < costo) {
        console.log("Entrada no válida o dinero insuficiente.");
        return;
    }
    let cambio = dineroEntregado - costo;
    console.log("El cambio a devolver es: " + cambio);
}
calcularCambio(); */

// Ejercicio 5

/* function calcularGastoVacunas() {
    let numeroVacunas = prompt("Ingrese el número de vacunas:");
    numeroVacunas = parseInt(numeroVacunas);
    let costoVacuna = prompt("Ingrese el costo de cada vacuna:");
    costoVacuna = parseFloat(costoVacuna);
    let costoAplicacion = prompt("Ingrese el costo de la aplicación:");
    costoAplicacion = parseFloat(costoAplicacion);
    if (isNaN(numeroVacunas) || isNaN(costoVacuna) || isNaN(costoAplicacion) || numeroVacunas < 0 || costoVacuna < 0 || costoAplicacion < 0) {
        console.log("Entrada no válida. Por favor, ingrese valores numéricos positivos.");
        return;
    }
    let totalGastado = numeroVacunas * (costoVacuna + costoAplicacion);
    console.log("El total gastado en vacunas es: $" + totalGastado.toFixed(2));
}
calcularGastoVacunas(); */

//Ejercicio 6

/* function calcularCostoCamisas() {
    let cantidad = prompt("Ingrese el número de camisas:");
    cantidad = parseInt(cantidad);
    let precioPorCamisa = prompt("Ingrese el precio por camisa:");
    precioPorCamisa = parseFloat(precioPorCamisa);
    if (isNaN(cantidad) || isNaN(precioPorCamisa) || cantidad <= 0 || precioPorCamisa <= 0) {
        console.log("Entrada no válida. Por favor, ingrese cantidades y precios válidos.");
        return;
    }
    let costoTotal = cantidad * precioPorCamisa;
    let descuento = 0;
    if (cantidad >= 3) {
        descuento = 0.20;
    } else {
        descuento = 0.10;
    }
    let precioFinal = costoTotal - (costoTotal * descuento);
    console.log("Total a pagar: $" + precioFinal.toFixed(2));
}
calcularCostoCamisas(); */

//Ejercicio 7

/* function finanzasTendero() {
    let dineroInicial = prompt("Ingrese la cantidad de dinero con la que empezó:");
    dineroInicial = parseFloat(dineroInicial);
    if (isNaN(dineroInicial)) {
        console.log("Entrada no válida. Por favor, ingrese un número válido.");
        return;
    }
    const valorVenta = 800000;
    const numeroDeVentas = 4;
    const totalVentas = valorVenta * numeroDeVentas;
    let dineroAntesAcreedores = dineroInicial + totalVentas;
    let pagoAcreedores = dineroAntesAcreedores * 0.10;
    let dineroFinal = dineroAntesAcreedores - pagoAcreedores;
    console.log("Dinero con el que empezó: $" + dineroInicial.toLocaleString());
    console.log("Dinero al final del día: $" + dineroFinal.toLocaleString());
    console.log("Pago realizado a sus acreedores: $" + pagoAcreedores.toLocaleString());
}
finanzasTendero(); */

// Ejercicio 8 

/* function calcularPromedioVentas() {
    let ventasTotales = 0;
    const dias = 5;
    for (let i = 1; i <= dias; i++) {
        let ventaDia = prompt("Ingrese las ventas del día " + i + ":");
        ventaDia = parseFloat(ventaDia);
        if (isNaN(ventaDia) || ventaDia < 0) {
            console.log("Entrada no válida. Por favor, ingrese un valor numérico positivo.");
            return;
        }
        ventasTotales += ventaDia;
    }
    let promedio = ventasTotales / dias;
    console.log("El promedio de ventas de los últimos 5 días es: $" + promedio.toFixed(2));
}
calcularPromedioVentas(); */

//Ejercicio 9 

/* function calculadoraEntera() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let operacion = prompt("Ingrese la operación (+, -, *, /):");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Entrada no válida. Por favor, ingrese números.");
        return;
    }
    let resultado;
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("No se puede dividir por cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            console.log("Operación no válida. Por favor, use +, -, * o /.");
            return;
    }
    console.log("El resultado de la operación es: " + Math.round(resultado));
}
calculadoraEntera(); */

//Ejercicio 10

/* function encontrarNumeros() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let num3 = prompt("Ingrese el tercer número:");
    let numeros = [parseFloat(num1), parseFloat(num2), parseFloat(num3)];
    if (numeros.some(isNaN)) {
        console.log("Entrada no válida. Por favor, ingrese tres números.");
        return;
    }
    numeros.sort((a, b) => a - b);
    console.log("Número menor: " + numeros[0]);
    console.log("Número medio: " + numeros[1]);
    console.log("Número mayor: " + numeros[2]);
    if (numeros[0] === numeros[1] || numeros[1] === numeros[2] || numeros[0] === numeros[2]) {
        console.log("Números iguales:");
        if (numeros[0] === numeros[1]) {
            console.log(numeros[0] + " y " + numeros[1] + " son iguales.");
        }
        if (numeros[1] === numeros[2]) {
            console.log(numeros[1] + " y " + numeros[2] + " son iguales.");
        }
    }
}
encontrarNumeros(); */

//Ejercicio 11

/* function seleccionarJugador() {
    let edad = prompt("Ingrese la edad del jugador:");
    let estatura = prompt("Ingrese la estatura del jugador en metros (ej. 1.85):");
    let peso = prompt("Ingrese el peso del jugador en kilogramos:");
    edad = parseInt(edad);
    estatura = parseFloat(estatura);
    peso = parseFloat(peso);
    let seleccionado = false;
    if (edad >= 18 && estatura > 1.7 && peso >= 50 && peso <= 90) {
        seleccionado = true;
    }
    if (seleccionado) {
        console.log("El jugador ha sido seleccionado para el equipo de baloncesto.");
    } else {
        console.log("El jugador no ha sido seleccionado para el equipo de baloncesto.");
    }
}
seleccionarJugador(); */

//Ejercicio 12

/* function calcularNuevoSueldo() {
    const salarioMinimo = 1300000;
    let sueldoActual = prompt("Ingrese el sueldo actual del trabajador:");
    sueldoActual = parseFloat(sueldoActual);
    if (isNaN(sueldoActual)) {
        console.log("Entrada no válida. Por favor, ingrese un número válido.");
        return;
    }
    let nuevoSueldo = sueldoActual;
    if (sueldoActual <= salarioMinimo) {
        nuevoSueldo = sueldoActual * 1.10;
        console.log("El trabajador recibe un aumento del 10%.");
    } else {
        console.log("El trabajador no recibe un aumento ya que gana más del salario mínimo.");
    }
    console.log("El sueldo a devengar es: $" + nuevoSueldo.toFixed(2));
}
calcularNuevoSueldo(); */

//Ejercicio 13

/* function almacenarDatos() {
    let datos = [];
    datos[0] = prompt("Ingrese el primer dato:");
    datos[1] = prompt("Ingrese el segundo dato:");
    datos[2] = prompt("Ingrese el tercer dato:");
    console.log("El contenido del array es:");
    console.log(datos);
}
almacenarDatos(); */

//Ejercicio 14 

/* function mostrarNombres() {
    let nombre = "";
    while (nombre.toLowerCase() !== "salir") {
        nombre = prompt("Ingrese un nombre (escriba 'salir' para terminar):");
        if (nombre.toLowerCase() !== "salir") {
            console.log("Nombre ingresado: " + nombre);
        }
    }
    console.log("El programa ha terminado.");
}
mostrarNombres(); */