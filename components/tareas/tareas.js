import { asignaciones } from "./data.js";

function cargarTareas(){
    
}
function item(tareaTexto) {
    let div = document.createElement('div');
    div.className = "task-item";

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    let texto = document.createElement('label');
    texto.textContent = tareaTexto;
    texto.className = "task-label";

    div.appendChild(checkbox);
    div.appendChild(texto);

    // Evento para marcar checkbox y aplicar estilos
    div.addEventListener('click', function() {
        let isChecked = this.querySelector('.task-checkbox').checked;
        this.querySelector('.task-checkbox').checked = !isChecked;

        if (!isChecked) {
            div.style.textDecoration = "line-through";
            div.style.backgroundColor = "green";
        } else {
            div.style.textDecoration = "none";
            div.style.backgroundColor = "transparent";
        }
    });

    return div;
}

function tarea() {
    let div = document.createElement('div');
    div.className = "task-container";

    let titulo = document.createElement('h1');
    titulo.textContent = "Today";
    titulo.className = "task-title";
    div.appendChild(titulo);

    let taskList = document.createElement('div');
    taskList.className = "task-list";

    asignaciones.forEach((tareaTexto) => {
        taskList.appendChild(item(tareaTexto));
    });

    div.appendChild(taskList);

    let inputContainer = document.createElement('div');
    inputContainer.className = "task-input-container";

    let taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.className = "task-input";
    taskInput.placeholder = "Nueva tarea";

    let addButton = document.createElement('button');
    addButton.textContent = "Add";
    addButton.className = "task-button";

    inputContainer.appendChild(taskInput);
    inputContainer.appendChild(addButton);

    div.appendChild(inputContainer);

    return div;
}

export { tarea };

