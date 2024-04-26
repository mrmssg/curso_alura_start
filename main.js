let nomeUsuario = "";
let elemento = document.querySelector("#nome-do-usuario");

while (nomeUsuario =="") {
    nomeUsuario = prompt("Qual é o seu nome?")
}

elemento.textContent = nomeUsuario;