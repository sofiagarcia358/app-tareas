import { agregarTarea } from "./funcionesFormulario.js";

function formulario(){
    let formulario = document.createElement('div');
    formulario.className = "div-formulario";

    let taskInput = document.createElement('input');
    taskInput.type = "text";
    taskInput.className = "fori";
    taskInput.placeholder = "";
    formulario.appendChild(taskInput);

    let addButton = document.createElement('button');
    addButton.textContent = "Add";
    addButton.className = "task-button";
    addButton.addEventListener('click', ()=>{agregarTarea()});
    formulario.appendChild(addButton);


    return formulario;

}

export{ formulario }