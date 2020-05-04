// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function tareaCompararNombres()  {
    const MI_NOMBRE = "tomas";
    const NOMBRE_PAPA = "julio";
    const nombreUsuario = (prompt("Como te llamas? ") || "").toLowerCase();

    if (MI_NOMBRE === nombreUsuario){
        alert(`Hola, tocayo! Yo tambien me llamo ${MI_NOMBRE}.`);
    } else if (NOMBRE_PAPA === nombreUsuario) {
        alert(`Hola ${nombreUsuario}, te llamas igual que mi papa.`);
    } else if (nombreUsuario.trim().length === 0) {
        alert("No ingresaste ningun favor. Intentalo de nuevo.");
        tareaCompararNombres();
    } else {
        alert(`Hola ${nombreUsuario}, bienvenido!`);
    }

} 

tareaCompararNombres();




//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function preguntarEdadUsuario(){
    const TEXTO_PREGUNTA_EDAD = "Cuantos años tenes?";
    const edadUsuario = Number(prompt(TEXTO_PREGUNTA_EDAD) || NaN);
    return edadUsuario;
}

function tareaCompararEdades() {
    const MI_EDAD = 28;    
    edadUsuario = preguntarEdadUsuario();

    if (MI_EDAD > edadUsuario) {
        alert("Sos menor que yo!"); 
    } else if (MI_EDAD < edadUsuario) {
        alert("Sos mayor que yo!");
    } else if (MI_EDAD === edadUsuario) {
        alert("Tenemos la misma edad!")
    } else {
        alert("No entiendo tu respuesta. Intentalo de nuevo.");
        tareaCompararEdades();  // FUNCION RECURSIVA, SE LLAMA A SI MISMA
    }
}

tareaCompararEdades();



//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


function tareaEntradaAlBar(){
    const EDAD_MINIMA_PARA_ENTRAR = 18;
    const SALUDO_ENTRADA = "Bienvenido al bar";
    alert(SALUDO_ENTRADA);

    const tieneDni = preguntarDniEnLaEntrada();

    if (tieneDni) {
        preguntarEdadEnLaEntrada(EDAD_MINIMA_PARA_ENTRAR);
    }

}




function preguntarDniEnLaEntrada() {
    const RESPUESTA_SI = "si";
    const RESPUESTA_NO = "no";
    const TEXTO_PREGUNTA_POR_DNI = "Tenes tu DNI?"
    const usuarioTieneDni = (prompt(TEXTO_PREGUNTA_POR_DNI) || "").toLowerCase();

    if (RESPUESTA_SI === usuarioTieneDni) {
        return true;
    } else if (RESPUESTA_NO === usuarioTieneDni){
        alert("Anda a buscar el DNI.");
        return false;
    } else {
        alert("No entendi tu respuesta.");
        return preguntarDniEnLaEntrada();
    }
}

function preguntarEdadEnLaEntrada(EDAD_MINIMA_PARA_ENTRAR){
    const edadUsuario = Number(prompt("Cuantos años tenes?"));
    const esMayorDeEdad = edadUsuario >= EDAD_MINIMA_PARA_ENTRAR;
    const esMenorDeEdad = edadUsuario < EDAD_MINIMA_PARA_ENTRAR;

    if (esMayorDeEdad){
        alert("Bienvenido al bar!");
    } else if (esMenorDeEdad){
        alert("Lo siento. No podes ingresar, sos menor de edad.")
    } else {
        alert("No entendi tu respuesta.");
        return preguntarEdadEnLaEntrada(EDAD_MINIMA_PARA_ENTRAR);
    }
}

tareaEntradaAlBar();