// Animación de escritura en el placeholder
const textarea = document.getElementById('texto');
const placeholderText = textarea.getAttribute('placeholder');

for (let i = 0; i < placeholderText.length; i++) {
  textarea.setAttribute('placeholder', placeholderText.substring(0, i + 1));
  setTimeout(() => {
    textarea.setAttribute('placeholder', placeholderText.substring(0, i + 1));
  }, i * 90);
}

// Cambiar tema de fondo
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", toggleDarkMode);

function toggleDarkMode() {
  if (this.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}


// Función para encriptar texto
function encriptar() {
  const texto = document.getElementById('texto').value;

  if (texto === "") {
    deshabilitarBotones();
    return;
  }

  const mensaje = texto.toLowerCase()
    .replace(/[aáeéiioóuú]/g, function (c) {
      switch (c) {
        case 'a': return 'ai';
        case 'á': return 'ai';
        case 'e': return 'enter';
        case 'é': return 'enter';
        case 'i': return 'imes';
        case 'í': return 'imes';
        case 'o': return 'ober';
        case 'ó': return 'ober';
        case 'u': return 'ufat';
        case 'ú': return 'ufat';
        default: return c;
      }
    });

  actualizarMensaje(mensaje, "Texto encriptado", "Texto encriptado correctamente.");
}

// Función para desencriptar texto
function desencriptar() {
  const mensaje = document.getElementById('mensaje').value;

  if (mensaje === "") {
    deshabilitarBotones();
    return;
  }

  const texto = mensaje.replace(/ai|ái|enter|énter|imes|ímés|ober|óbér|ufat|úfát/g, function (c) {
    switch (c) {
      case 'ai': return 'a';
      case 'ái': return 'á';
      case 'enter': return 'e';
      case 'énter': return 'é';
      case 'imes': return 'i';
      case 'ímés': return 'í';
      case 'ober': return 'o';
      case 'óbér': return 'ó';
      case 'ufat': return 'u';
      case 'úfát': return 'ú';
      default: return c;
    }
  });

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
