
function ocultar(){
    imagen.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptar (){
   ocultar();
   var mensaje = document.getElementById("cajaTexto").value.toLowerCase();
    // i es para que afecte tanto a mayusculas y minusculas
    // g es para  toda la linea u oracion 
    // m es para multiples lineas 
    var mensajeCifrado = mensaje.replace(/e/igm, "enter");
    var mensajeCifrado = mensajeCifrado.replace(/o/igm, "ober");
    var mensajeCifrado = mensajeCifrado.replace(/i/igm, "imes");
    var mensajeCifrado = mensajeCifrado.replace(/a/igm, "ai");
    var mensajeCifrado = mensajeCifrado.replace(/u/igm, "ufat");

    document.getElementById("resultado").innerHTML = mensajeCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){

    var mensaje = document.getElementById("cajaTexto").value.toLowerCase();
    // i es para que afecte tanto a mayusculas y minusculas
    // g es para  toda la linea u oracion 
    // m es para multiples lineas 
    var mensajeCifrado = mensaje.replace(/enter/igm, "e");
    var mensajeCifrado = mensajeCifrado.replace(/ober/igm, "o");
    var mensajeCifrado = mensajeCifrado.replace(/imes/igm, "i");
    var mensajeCifrado = mensajeCifrado.replace(/ai/igm, "a");
    var mensajeCifrado = mensajeCifrado.replace(/ufat/igm, "u");


    document.getElementById("imagen").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    document.getElementById("resultado").innerHTML = mensajeCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiarMensaje(resultado){
 /*  var mensaje = document.getElementById("resultado");
    mensaje.onselect
    mensaje.setSelectionRange(0, 99999);
   document.execCommand("copy");*/
    alert(" Mensaje copiado");
}

var clipboard = new Clipboard('.copiar');