//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const siguientePaso = document.querySelector("#siguiente-paso");
siguientePaso.onclick = function(event){
    const $cantidadVideos = document.querySelector("#cantidad-videos");
    const cantidadVideos = $cantidadVideos.value;

    borrarInputTiempos();
    

    crearInputTiempos(cantidadVideos);
    

    event.preventDefault();
}

const botonReset = document.querySelector("#resetear");
botonReset.onclick = function(){
    resetear();

}

const botonCalcularTiempo = document.querySelector("#calcular-tiempos");
botonCalcularTiempo.onclick = function(event){
   
    mostrarTiempo(obtenerTiempo());
   
    mostrarResultado();

    event.preventDefault();
}

function resetear(){
    borrarInputTiempos();
    ocultarBotonCalcularTiempos();
    ocultarResultado();
}

function borrarInputTiempos(){
    const $inputTiempo = document.querySelectorAll(".tiempos");
    for ( let i = 0; i < $inputTiempo.length; i++){
        $inputTiempo[i].remove();
    }

}

function crearInputTiempos(cantidadVideos){
    if (cantidadVideos > 0){
        mostrarBotonCalcularTiempos();
    }
    else {
        resetear();
    }
    for (let i = 0; i < cantidadVideos; i++){
        crearTiempo(i);
    }

}

function crearTiempo(indice){
    const $div = document.createElement('div');
    $div.className = 'tiempos';

    const $label = document.createElement('label');
    $label.textContent = 'Tiempo del video # ' + (indice + 1);

    const $inputHoras = document.createElement('input');
    $inputHoras.className = 'horas';
    $inputHoras.type = 'number';
    

    const $inputMinutos = document.createElement('input');
    $inputMinutos.className = 'minutos';
    $inputMinutos.placeholder = 'Minutos';
    $inputMinutos.type = 'number';

    const $inputSegundos = document.createElement('input');
    $inputSegundos.className = 'segundos';
    $inputSegundos.placeholder = 'Segundos';
    $inputSegundos.type = 'number';

    $div.appendChild($label);
    $div.appendChild($inputHoras);
    $div.appendChild($inputMinutos);
    $div.appendChild($inputSegundos);


    const $formularioVideos = document.querySelector("#formulario-videos");
    $formularioVideos.appendChild($div);
    
}

function mostrarBotonCalcularTiempos(){
    document.querySelector("#calcular-tiempos").className = '';
}

function ocultarBotonCalcularTiempos(){
    document.querySelector("#calcular-tiempos").className = 'oculto';
}

function mostrarTiempo(valor){
    document.querySelector('#tiempo-total').textContent = valor;
}

function mostrarResultado() {
    document.querySelector('#resultado').className = '';
}

function ocultarResultado(){
    document.querySelector("#resultado").className = 'oculto';
}


function obtenerTiempo(){
    const totalHoras = sumar(obtenerHoras());
    const totalMinutos = sumar(obtenerMinutos());
    const totalSegundos = sumar(obtenerSegundos());

    return `${totalHoras} hs. ${totalMinutos} min. ${totalSegundos} seg.`;
}

function obtenerHoras(){
    const $horas = document.querySelectorAll('.horas');
    const horas = [];
    for ( let i=0; i < $horas.length ;i++){
        horas.push(Number($horas[i].value));
    }
    return horas;
}

function obtenerMinutos(){
    const $minutos = document.querySelectorAll('.minutos');
    const minutos = [];
    for (let i = 0; i< $minutos.length; i++){
        minutos.push(Number($minutos[i].value));
    }
    return minutos;
}

function obtenerSegundos(){
    const $segundos = document.querySelectorAll('.segundos');
    const segundos = [];
    for (let i =0; i < $segundos.length; i++){
        segundos.push(Number($segundos[i].value));
    }
    return segundos;
}



