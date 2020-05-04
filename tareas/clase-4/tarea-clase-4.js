// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

function tareaFor(){  
    let i;  
    for (let i = 3; i <= 23; i = i+3)
    console.log(i);
}

tareaFor();

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

function tareaWhile1(){
    let numero = 10;  

    while (numero !== 0) {
        console.log(numero);
        numero--;
    }
}


function tareaWhile2(){
    let n = 11;
    while (n > 1){
        n--;
        console.log(n);       
    }
}

tareaWhile1();
//tareaWhile2();
// funciones disintas que logran lo mismo

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

function ejercicioFizzBuzzClasico() {
    for (let i=1; i <= 50; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

function ejercicioFizzBuzzPro(){
    for(let i=1; i<=50;i++) {
        let texto = ""; 

        if(i%3===0) {
            texto = "Fizz";   
        }

        if(i%5===0) {
            texto += "Buzz";              
        }
        
        console.log(texto || i); 
        // Boolean("") = false; (falsy)
        // check MDN Boolean
        // see algorithm operation in console
    }
}

//ejercicioFizzBuzzClasico();
ejercicioFizzBuzzPro();


// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedios(numeros){
    let sumaNumeros = 0;
    for (let i = 0; i < numeros.length; i++){
        sumaNumeros = sumaNumeros + numeros[i];
    }
    console.log(`El promedio de notas es ${sumaNumeros/numeros.length}`);
}

const numeros = [10,6,7,4]
calcularPromedios(numeros);
