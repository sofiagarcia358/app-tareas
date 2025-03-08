import { header } from "./components/header/header.js";
//import { cargarTareas } from "./components/tareas/tareas.js";
import { formulario } from "./components/formulario/formulario.js";
import { consultarTareaBackend } from "./components/tareas/tareas.js";

let DOM = document.querySelector("#root");

function cargarDom (){
   DOM.appendChild(header());
    consultarTareaBackend();
    DOM.appendChild(formulario());
}
cargarDom();

