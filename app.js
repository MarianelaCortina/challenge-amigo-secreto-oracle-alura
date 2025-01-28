/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

let listaAmigos = [];
let nombreAmigo = "";

function ingresarNombreAmigo(){
    nombreAmigo = document.getElementById("amigo").value;
}

function limpiarInput(){
    document.getElementById("amigo").value = "";
}

function mostrarListaAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++){
        document.getElementById("listaAmigos").innerHTML += "<li>" + listaAmigos[i] + "</li>";
    }
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
    }else{
        listaAmigos.push(nombreAmigo);
        //console.log(listaAmigos);
        mostrarListaAmigos();
    }
    limpiarInput();
}
