//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*
* */


function nombreCompletoUsuario(){     
    const nombreUsuario = document.querySelector("#nombre-usuario").value;   
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;

    nombreCompleto = nombreUsuario + " " + apellidoUsuario;
    return nombreCompleto;
}

function comprobarEdadUsuario(){
    const EDAD_INGRESO = 18;
    const edadUsuario = document.querySelector("#edad-usuario").value;
    if (EDAD_INGRESO <= edadUsuario){
        return true;
    } else {
        return false;
    }
}

function saludarUsuario(){
    const nombreUsuario = nombreCompletoUsuario();
    const permitirIngreso = comprobarEdadUsuario();
    if (permitirIngreso) {
        document.querySelector("#respuesta-usuario").textContent = `Bienvenido, ${nombreUsuario} !`;
    } else {
        document.querySelector("#respuesta-usuario").textContent = `Lo siento ${nombreUsuario}, no podes ingresar.`;
    }
}

const resetear = document.querySelector("#resetear");
resetear.onclick = function(){
    document.querySelector("#respuesta-usuario").textContent = '';
}

const ingresoUsuario = document.querySelector("#ingreso-usuario");
ingresoUsuario.onclick = function(event){
    saludarUsuario();
    event.preventDefault();    
}

