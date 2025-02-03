/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

let listaAmigos = [];
let nombreAmigo = "";

function ingresarNombreAmigo(){
    nombreAmigo = document.getElementById("amigo").value;
}

/* Función genérica para limpiar el contenido de un elemento del DOM por su ID.
Puede utilizarse con inputs, listas, divs u otros elementos HTML.
Diseñada para ser reutilizable y adaptable a diferentes tipos de elementos. */
function limpiarElementoPorId(id) {
    let elemento = document.getElementById(id);
    if (elemento) {
        if ("value" in elemento) {
            // Si el elemento tiene una propiedad 'value' (ej: <input>, <textarea>)
            elemento.value = "";
        } else {
            // Si es otro tipo de elemento (ej: <ul>, <ol>, <div>, etc.)
            elemento.innerHTML = "";
        }
    } else {
        console.warn(`Elemento con id "${id}" no encontrado.`);
    }
}

/*La función asigna un texto a un elemento del DOM según su ID.
 Parámetro "idElemento": ID del elemento al que se asignará el texto.
 Parámetro "texto": Texto que se asignará al elemento.
 Parámetro "usarHTML=false": Si es true, usa innerHTML; si es false, usa textContent.
 Parámetro "agregar=false": Si es true, agrega el texto en lugar de sobrescribirlo.
 Si el elemento es un input o textarea, asigna el texto a su propiedad value.
 Si el elemento no se encuentra, muestra una advertencia en la consola.
 */
function asignarTextoElemento(idElemento, texto, usarHTML = false, agregar = false) {
    let elemento = document.getElementById(idElemento);
    if (elemento) {
        if ("value" in elemento) {
            elemento.value = texto;
        } else {
            elemento[usarHTML ? "innerHTML" : "textContent"] += agregar ? texto : "";
            if (!agregar) {
                elemento[usarHTML ? "innerHTML" : "textContent"] = texto;
            }
        }
    } else {
        console.warn(`Elemento con id "${idElemento}" no encontrado.`);
    }
}

function mostrarListaAmigos() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('listaAmigos', "<li>No hay amigos en la lista</li>", true);
        return;
    }
    let listaHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join("");
    asignarTextoElemento('listaAmigos', listaHTML, true, false);
}
/*Esta función vacía la lista de amigos ingreada por el usuario
permitiendo que el array se pueda reutilizar para agregar
nuevos nombres de amigos */
function limpiarListaAmigos(){
    listaAmigos.length = 0;
    return listaAmigos;
}
    
function agregarAmigo(){
    ingresarNombreAmigo();
    if(nombreAmigo === ""){
        alert("Por favor inserte un nombre");
    }
    else if(listaAmigos.includes(nombreAmigo)){
        alert("Este amigo ya fue agregado");
        limpiarElementoPorId('amigo');
    } 
    else {
        listaAmigos.push(nombreAmigo);
        mostrarListaAmigos();
    }
    return limpiarElementoPorId('amigo');
}

function generarAmigoSorteado(listaAmigos){
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    return listaAmigos[amigoSorteado];
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Por favor proporcione al menos un amigo");
        return;
    }
    let amigoGanador = generarAmigoSorteado(listaAmigos);
    asignarTextoElemento("resultado", `<li>El amigo secreto sorteado es: ${amigoGanador}</li>`, true, true);
    limpiarElementoPorId('listaAmigos');
    asignarTextoElemento("title-input", ``, false, false)
    document.getElementById('reiniciar').removeAttribute('disabled');
}


function reiniciarJuegoAmigoSecreto(){
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    asignarTextoElemento("title-input", `Digite el nombre de sus amigos`, false, false);
    asignarTextoElemento("resultado", ``, false, false);
    limpiarListaAmigos();
}