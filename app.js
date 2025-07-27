//Cambia el contenido de la etiqueta h1 con document.
//querySelector y asigna el siguiente texto: Hora del Desafío.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

/*Crea una función que muestre en la consola el mensaje 
"El botón fue clicado" 
siempre que se presione el botón "Console".*/

function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
/*.Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
preguntando el nombre de una ciudad de Brasil. 
Luego, muestra una alerta con el mensaje concatenando 
la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/

function mostrarAlerta() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}
