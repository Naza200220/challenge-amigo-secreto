let amigos = [];

function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  if (inputNombre.value.trim() !== "") {
    amigos.push(inputNombre.value);
    inputNombre.value = "";
    mostrarAmigos();
  } else {
    alert("Por favor, ingrese un nombre");
  }
}
