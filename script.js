// Función para encriptar texto
function encriptar() {
  let texto = document.getElementById('texto').value;

  if (texto === "") {
    document.getElementById('encriptar').disabled = true;
    document.getElementById('desencriptar').disabled = true;
    document.getElementById('limpiar').disabled = true;
    return;
  }

  let mensaje = "";

  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "e":
        mensaje += "enter";
        break;
      case "i":
        mensaje += "imes";
        break;
      case "a":
        mensaje += "ai";
        break;
      case "o":
        mensaje += "ober";
        break;
      case "u":
        mensaje += "ufat";
        break;
      default:
        mensaje += texto[i];
    }
  }

  document.getElementById('mensaje').value = mensaje;
  document.getElementById('titulo-mensaje').innerHTML = "Texto encriptado";
  document.getElementById('msj').innerHTML = "Texto encriptado correctamente.";
  document.getElementById('image').classList.add('invisible');
  document.getElementById('result').classList.remove('invisible');
  document.getElementById('copiar').disabled = false;
  document.getElementById('texto').addEventListener('input', validarTexto);

}

// Función para desencriptar texto
function desencriptar() {
  let mensaje = document.getElementById('mensaje').value;

  if (mensaje === "") {
    document.getElementById('encriptar').disabled = true;
    document.getElementById('desencriptar').disabled = true;
    document.getElementById('limpiar').disabled = true;
    return;
  }

  let texto = "";

  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje.substring(i, i + 5) === "enter") {
      texto += "e";
      i += 4;
    } else if (mensaje.substring(i, i + 4) === "imes") {
      texto += "i";
      i += 3;
    } else if (mensaje.substring(i, i + 2) === "ai") {
      texto += "a";
      i += 1;
    } else if (mensaje.substring(i, i + 4) === "ober") {
      texto += "o";
      i += 3;
    } else if (mensaje.substring(i, i + 4) === "ufat") {
      texto += "u";
      i += 3;
    } else {
      texto += mensaje[i];
    }
  }

  document.getElementById('mensaje').value = texto;
  document.getElementById('titulo-mensaje').innerHTML = "Texto desencriptado";
  document.getElementById('msj').innerHTML = "Texto desencriptado correctamente.";
  document.getElementById('image').classList.add('invisible');
  document.getElementById('result').classList.remove('invisible');
  document.getElementById('copiar').disabled = false;
  document.getElementById('texto').addEventListener('input', validarTexto);
}

// Función para limpiar texto
function limpiar() {
  document.getElementById('texto').value = "";
  document.getElementById('mensaje').value = "";
  document.getElementById('titulo-mensaje').innerHTML = "Ningún mensaje fue encontrado";
  document.getElementById('msj').innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
  document.getElementById('image').classList.remove('invisible');
  document.getElementById('result').classList.add('invisible');
  document.getElementById('copiar').disabled = true;

  // Restablecer todos los valores a sus estados iniciales
  document.getElementById('copiar').innerHTML = "Copiar";
  document.getElementById('texto').disabled = false;
  document.getElementById('mensaje').disabled = false;
  document.getElementById('encriptar').disabled = false;
  document.getElementById('desencriptar').disabled = false;
}


// Función para copiar texto al portapapeles
function copiar() {
  let mensaje = document.getElementById('mensaje');
  mensaje.select();
  mensaje.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById('copiar').innerHTML = "¡Copiado!";
  document.getElementById('copiar').style.backgroundColor = "#364248"; // Cambiar el color del botón
  setTimeout(function () {
    document.getElementById('copiar').innerHTML = "Copiar";
    document.getElementById('copiar').style.backgroundColor = ""; // Volver al color original del botón
  }, 2000); // 2 segundos de espera
}
