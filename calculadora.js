const resultadoOperacion = document.getElementById("resultadoOperacion");
const formulario = document.getElementById("capturaUsuarioValores");
const valor1Input = document.getElementById("valor1");
const valor2Input = document.getElementById("valor2");

function realizarOperacion(valor1, valor2, operacion) {
  // Realizar la operación según el operador seleccionado
  if (operacion === "suma") {
    resultado = valor1 + valor2;
  } else if (operacion === "resta") {
    resultado = valor1 - valor2;
  } else if (operacion === "multiplicacion") {
    resultado = valor1 * valor2;
  } else if (operacion === "division") {
    if (valor2 !== 0) {
      resultado = valor1 / valor2;
    } else {
      resultado = "Error";
    }
  }
  return resultado;
}

// Función para mostrar el resultado en el elemento de resultado
function mostrarResultado(resultado, operacion) {
  if (resultado === "Error") {
    resultadoOperacion.style.color = "red";
    resultadoOperacion.textContent = "ERROR: La división entre 0 no es posible";
  } else {
    resultadoOperacion.style.color = "black";
    resultadoOperacion.textContent = "El resultado de la " + operacion + " es: " + resultado;
  }
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(event) {
  event.preventDefault(); // Evita que el formulario se envíe y recargue la página.

  // Capturar valores de los campos y convertirlos a números
  const valor1 = parseFloat(valor1Input.value);
  const valor2 = parseFloat(valor2Input.value);
  const operacion = document.querySelector(
    'input[name="operador"]:checked'
  ).value;

  // Realizar la operación y mostrar el resultado
  const resultado = realizarOperacion(valor1, valor2, operacion);
  mostrarResultado(resultado, operacion);
}

// Función para manejar el reinicio del formulario
function manejarReinicioFormulario() {
  resultadoOperacion.style.color = "black";
  resultadoOperacion.textContent = "";
}

// Añadir manejadores de eventos
formulario.addEventListener("submit", manejarEnvioFormulario);
formulario.addEventListener("reset", manejarReinicioFormulario);
