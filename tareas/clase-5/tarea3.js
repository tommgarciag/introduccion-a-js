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

function resetear(){
    borrarInputTiempos();
}

function borrarInputTiempos(){
    const $inputTiempo = document.querySelectorAll(".tiempos");
    for ( let i = 0; i < $inputTiempo.length; i++){
        $inputTiempo[i].remove();
    }

}

function crearInputTiempos(cantidadVideos){
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
    $inputHoras.placeholder = 'Horas';
    $inputHoras.type = 'number';

    const $inputMinutos = document.createElement('input');
    $inputMinutos.placeholder = 'Minutos';
    $inputMinutos.type = 'number';

    const $inputSegundos = document.createElement('input');
    $inputSegundos.placeholder = 'Segundos';
    $inputSegundos.type = 'number';

    $div.appendChild($label);
    $div.appendChild($inputHoras);
    $div.appendChild($inputMinutos);
    $div.appendChild($inputSegundos);


    const $formularioVideos = document.querySelector("#formulario-videos");
    $formularioVideos.appendChild($div);
    
}
