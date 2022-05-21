const enviar = document.querySelector("#enviar");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
const form = document.querySelector("#enviar-mail");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", startApp);
  email.addEventListener("blur", validateFrom);
  asunto.addEventListener("blur", validateFrom);
  mensaje.addEventListener("blur", validateFrom);
  form.addEventListener("submit", sendEmail);
}

function startApp() {
  enviar.ariaDisabled = true;
  enviar.classList.add("cursor-not-allowed", "opacity-50");
}

function validateFrom(e) {
  if (e.target.value.length > 0) {
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500");
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    showError("All fields are requierd");
  }

  if (e.target.type === "email") {
    // const results = e.target.value.indexOf("@");
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
    } else {
      e.target.classList.add("border", "border-red-500");
      showError("It must be a valid email");
    }
  }
  if (er.test(email.value) && asunto.value !== "" && mensaje.value !== "") {
    enviar.ariaDisabled = false;
    enviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

// } else if (e.target.type === text) {
//   console.log("Soy text");
// } else {
//   console.log("Textaera");
// }

function showError(message) {
  const messageError = document.createElement("p");
  messageError.textContent = message;
  messageError.classList.add(
    "border",
    "border-red-500",
    "background-color-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center",
    "error"
  );

  const errors = document.querySelectorAll(".error");

  if (errors.length === 0) {
    form.appendChild(messageError);
  }
}
function sendEmail(e) {
  e.preventDefault();
  //
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";
    const parrafo = document.createElement("p");
    parrafo.textContent = "Se envio correctamente";
    form.insertBefore(parrafo, spinner);
  }, 3000);
}
