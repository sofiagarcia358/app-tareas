import { header } from "./components/header/header.js";
import { tarea } from "./components/tareas/tareas.js";
import { formulario } from "./components/formulario/formulario.js";

let DOM = document.getElementById("root");
DOM.className = "cuadro";


DOM.appendChild(header());
DOM.appendChild(tarea());
DOM.appendChild(formulario());