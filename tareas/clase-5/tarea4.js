//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


function obtenerNumeros(){
    const $lista = document.querySelectorAll("#lista li");
    const numeros = [];
    for ( let i = 0; i < $lista.length; i++){
        numeros.push(Number($lista[i].textContent));
    }
    return numeros;
}



function resultados(){
    const numeros = obtenerNumeros();
    
    mostarResultados('promedio', obtenerPromedio(numeros));
    mostarResultados('menor', obtenerMenorNumero(numeros)); 
    mostarResultados('mayor', obtenerMayorNumero(numeros));       
    mostarResultados('frecuente', obtenerMasFrecuente(numeros));

}

function mostarResultados(tipo,valor){
    document.querySelector(`#${tipo}`).textContent += valor;
}

resultados();

