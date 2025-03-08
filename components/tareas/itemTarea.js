import { marcarTareas } from "./funcionesTarea.js";

function tarea(tarea) {
    let div = document.createElement('div');
    div.className = "task-item";//div_item

        let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    div.appendChild(checkbox);

   // let texto = document.createElement('label');
   // texto.textContent = tareaTexto;
   // texto.className = "task-label";
    //div.appendChild(texto);

    let p = document.createElement('p');
    p.textContent = tarea;
    div.appendChild(p);

    div.addEventListener('click', marcarTareas);

    return div;
}
export{tarea}