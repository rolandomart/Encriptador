// Animación de escritura en el placeholder
const textarea = document.getElementById('texto');
const placeholderText = textarea.getAttribute('placeholder');

for (let i = 0; i <= placeholderText.length; i++) {
  setTimeout(() => {
    textarea.setAttribute('placeholder', placeholderText.substring(0, i));
  }, i * 90);
}

// Cambiar tema de fondo
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add("dark-mode");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
}


// Función para convertir el texto a minúsculas en tiempo real
function convertirAMinusculas() {
  const texto = document.getElementById('texto');
  texto.value = texto.value.toLowerCase();
}

// Agregar el evento para convertir a minúsculas en tiempo real
document.getElementById('texto').addEventListener('input', convertirAMinusculas);



// Función para encriptar texto
function encriptar() {
  const texto = document.getElementById('texto').value;

  if (texto === "") {
    deshabilitarBotones();
    return;
  }

  const mensaje = texto.toLowerCase()
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  actualizarMensaje(mensaje, "Texto encriptado", "Texto encriptado correctamente.");
}

// Función para desencriptar texto
function desencriptar() {
  const mensaje = document.getElementById('mensaje').value;

  if (mensaje === "") {
    deshabilitarBotones();
    return;
  }

  const texto = mensaje.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  actualizarMensaje(texto, "Texto desencriptado", "Texto desencriptado correctamente.");
}



// Función para actualizar el mensaje y mostrar resultados
function actualizarMensaje(texto, titulo, msj) {
  document.getElementById('mensaje').value = texto;
  document.getElementById('titulo-mensaje').innerHTML = titulo;
  document.getElementById('msj').innerHTML = msj;
  document.getElementById('image').classList.add('invisible');
  document.getElementById('result').classList.remove('invisible');
  document.getElementById('copiarBtn').disabled = false;
  document.getElementById('texto').addEventListener('input', validarTexto);
}

// Función para deshabilitar botones
function deshabilitarBotones() {
  document.getElementById('encriptar').disabled = true;
  document.getElementById('desencriptar').disabled = true;
  document.getElementById('limpiar').disabled = true;
}

// Función para limpiar texto
function limpiar() {
  document.getElementById('texto').value = "";
  document.getElementById('mensaje').value = "";
  document.getElementById('titulo-mensaje').innerHTML = "Ningún mensaje fue encontrado";
  document.getElementById('msj').innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
  document.getElementById('image').classList.remove('invisible');
  document.getElementById('result').classList.add('invisible');
  document.getElementById('copiarBtn').disabled = true;

  // Restablecer todos los valores a sus estados iniciales
  document.getElementById('copiarBtn').innerHTML = "Copiar";
  document.getElementById('texto').disabled = false;
  document.getElementById('mensaje').disabled = false;
  document.getElementById('encriptar').disabled = false;
  document.getElementById('desencriptar').disabled = false;
}

// Función para copiar el mensaje encriptado
function copiar() {
  const mensaje = document.getElementById('mensaje');
  mensaje.select();
  mensaje.setSelectionRange(0, 99999);
  document.execCommand("copy");

  // Actualizar el contenido y estilo del botón de copiar mensaje encriptado
  const copiarBtn = document.getElementById('copiarBtn');
  copiarBtn.innerHTML = "¡Copiado!";
  copiarBtn.style.backgroundColor = "#364248";
  setTimeout(function () {
    copiarBtn.innerHTML = "Copiar";
    copiarBtn.style.backgroundColor = "";
  }, 2000);
}

// Función para copiar el texto encriptado
function copiarTexto() {
  const mensaje = document.getElementById('mensaje');
  mensaje.select();
  mensaje.setSelectionRange(0, 99999);
  document.execCommand("copy");

  // Actualizar el contenido y estilo del botón de copiar texto encriptado
  const copiarTextoBtn = document.getElementById('copiarTextoBtn');
  copiarTextoBtn.innerHTML = "¡Copiado!";
  copiarTextoBtn.style.backgroundColor = "#364248";
  setTimeout(function () {
    copiarTextoBtn.innerHTML = "Copiar";
    copiarTextoBtn.style.backgroundColor = "";
  }, 2000);
}
