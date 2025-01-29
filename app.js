/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

let listaAmigos = [];
let nombreAmigo = "";

function ingresarNombreAmigo(){
    nombreAmigo = document.getElementById("amigo").value;
}
//mejorar esta funcion, para que reciba el id como parametro y pueda ser reutilizable
function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function mostrarListaAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++){
        document.getElementById("listaAmigos").innerHTML += "<li>" + listaAmigos[i] + "</li>";
    }
} 

function limpiarListaAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    //listaAmigos = [''];
}

function asignarTextoElemento(idElemento, texto){
    document.getElementById(idElemento).innerHTML = texto;
}




function agregarAmigo(){
    ingresarNombreAmigo();
    if(nombreAmigo === ""){
        alert("Por favor inserte un nombre");
        return;
    }
    else if(listaAmigos.includes(nombreAmigo)){
        alert("Este amigo ya fue agregado");
        limpiarInput();
        return;
    } 
    else {
        listaAmigos.push(nombreAmigo);
        mostrarListaAmigos();
    }
    limpiarInput();
}


function generarAmigoSorteado(listaAmigos){
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    console.log
    return listaAmigos[amigoSorteado];
}

function sortearAmigo(){
    if(listaAmigos == ''){
        alert("Por favor proporcione al menos un amigo");
        return;
    }
    else {
        let amigoGanador = generarAmigoSorteado(listaAmigos);
        document.getElementById("resultado").innerHTML += "<li>" + `El amigo secreto sorteado es:  ${amigoGanador}` + "</li>";
        limpiarListaAmigos();
    }
}

