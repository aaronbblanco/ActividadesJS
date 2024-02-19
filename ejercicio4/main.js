let oculto = true;

function toggleText() {
  const texto = document.getElementById("hiddenText");
  texto.classList.toggle("hidden");

  const boton = document.getElementById("boton");
  if (oculto) {
    // cambio el texto a "Ocultar"
    boton.innerHTML = "Ocultar exceso de texto";
  } else {
    // cambio a "Seguir leyendo"
    boton.innerHTML = "Seguir leyendo";
  }
  oculto = !oculto;
}