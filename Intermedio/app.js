/*
-   mostrar() = Se encarga de mostrar lo que el usuario ingresa en el campos de texto con id "nombre" y mostrar un saludo personalizado en el campo de texto con id "mostrar". 
                Se ejecuta al hacer clic en el botón con id "btnEnviar".
                - El campo "nombre" no debe estar vacío ni contener solo espacios en blanco o se mostrará una alerta.
                - El campo "mostrar" no permite ingresar texto.

    limpiar() = Limpia el contenido de los campos de texto con id "nombre" y "mostrar".

    soloLetras(event) = Permite que el usuario solo escriba letras (mayúsculas, minúsculas, ñ, Ñ y espacios)
     en el campo de texto donde se aplica esta función.
     -Si no se cumple se muestra un alert.
*/

function mostrar() {
  var nombre = document.getElementById("nombre").value;
  var mensaje;
  if (nombre.trim() !== "") {
    mensaje = "Hola, mucho gusto " + nombre;
    document.getElementById("mostrar").value = mensaje;
  } else {
    alert("Ingrese un nombre");
    mensaje = "";
    document.getElementById("mostrar").value = mensaje;
  }
}
function soloLetras(event) {
  var letra = event.key;
  var letrasPermitidas = /^[a-zA-ZñÑ\s]+$/;

  if (!letrasPermitidas.test(letra)) {
    event.preventDefault();
    alert("Por favor, ingrese solo letras o texto sin números ni símbolos.");
  }
}

function limpiar() {
  var limpiar = "";
  document.getElementById("nombre").value = limpiar;
  document.getElementById("mostrar").value = limpiar;
}

document.getElementById("btnEnviar").addEventListener("click", mostrar);
document.getElementById("btnLimpiar").addEventListener("click", limpiar);
