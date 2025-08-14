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

function mostrarAmigos() {
  let amigosList = document.getElementById("listaAmigos");
  amigosList.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    amigosList.appendChild(li);
  }
}
