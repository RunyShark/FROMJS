const enviar = document.querySelector("#enviar");

const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", startApp);
  email.addEventListener("blur", validateFrom);
  asunto.addEventListener("blur", validateFrom);
  mensaje.addEventListener("blur", validateFrom);
}

function startApp() {
  enviar.ariaDisabled = true;
  enviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validateFrom(e) {
  if (e.target.value.length > 0) {
    console.log("Sik tengo");
  } else {
    e.target.classList.add("border", "border-red-500");
  }
}
