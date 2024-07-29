/* La función "mostrarResultados" oculta la sección que aparece antes de realizar alguna acción de encriptar o desencriptar 
y muestra la sección de resultados con el valor recibido de la función que la invoca.*/
function mostrarResultados(resultado) {
    document.getElementById("resultado__sinTexto").style.display = "none";
    document.getElementById("resultado__texto").style.display = "flex";
    document.getElementById("resultado__texto__parrafo").value = resultado;
}


/* La función "encriptar" revisa cada caracter, sí encuentra algún caracter de los buscados, agrega su reemplazo al resultado 
de lo contrario, agrega el caracter original.*/
function encriptar() {
    if (document.getElementById("interaccion__inputArea").value != "") {
        let interaccion__inputArea = document.getElementById("interaccion__inputArea").value;
        let resultado = "";
        for (let i = 0; i < interaccion__inputArea.length; i++) {
            if (interaccion__inputArea[i] == "a") {
                resultado += "ai";
            }else if (interaccion__inputArea[i] == "e") {
                resultado += "enter";
            }else if (interaccion__inputArea[i] == "i") {
                resultado += "imes";
            }else if (interaccion__inputArea[i] == "o") {
                resultado += "ober";
            }else if (interaccion__inputArea[i] == "u") {
                resultado += "ufat"
            }else{
                resultado += interaccion__inputArea[i];
            }
        }
        
        mostrarResultados(resultado)
    }
}


/* La función "desencriptar" utiliza el método includes para buscar los juegos de caracteres y el método replaceAll para reemplazarlos por las
letras correspondientes en el caso de encontrarlos, en el caso contrario deja la resultado sin cambios */
function desencriptar() {
    if (document.getElementById("interaccion__inputArea").value != "") {
        let interaccion__inputArea = document.getElementById("interaccion__inputArea").value;
        let resultado = interaccion__inputArea;
        
        interaccion__inputArea.includes("ai") ? resultado = resultado.replaceAll("ai", "a") : resultado = resultado;
        interaccion__inputArea.includes("enter") ? resultado = resultado.replaceAll("enter", "e") : resultado = resultado;
        interaccion__inputArea.includes("imes") ? resultado = resultado.replaceAll("imes", "i") : resultado = resultado;
        interaccion__inputArea.includes("ober") ? resultado = resultado.replaceAll("ober", "o") : resultado = resultado;
        interaccion__inputArea.includes("ufat") ? resultado = resultado.replaceAll("ufat", "u") : resultado = resultado;   

        mostrarResultados(resultado);
    }
  
}


// La función "copiarTexto" permite copiar el texto del área de resultado, mediante un botón. 
function copiarTexto() {
    const textoPorCopiar = document.getElementById("resultado__texto__parrafo");

    textoPorCopiar.select();
    document.execCommand('copy'); 
}