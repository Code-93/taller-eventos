function mostrarAlerta(mensaje) {
  alert(mensaje);
}

document.addEventListener("DOMContentLoaded", function () {
  const divElement = document.getElementById("divSaludo");
  divElement.addEventListener("click", function () {
    mostrarAlerta("Hola! Soy el div");
  });
});
