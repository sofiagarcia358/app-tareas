import { login } from "./Registrarse/login/login.js";
import { header } from "./components/header/header.js";
import { formulario } from "./components/formulario/formulario.js";
import { consultarTareaBackend } from "./components/tareas/tareas.js";

let DOM = document.querySelector("#root");

function cargarApp() {
    DOM.innerHTML = ""; // Limpia el contenido anterior
    DOM.appendChild(header());
    consultarTareaBackend();
    DOM.appendChild(formulario());
}

function cargarLogin() {
    DOM.innerHTML = ""; // Limpia el contenido anterior
    DOM.appendChild(login());
}

// Verifica si el usuario está autenticado
if (sessionStorage.getItem("autenticado") === "true") {
    cargarApp();
} else {
    cargarLogin();
}

