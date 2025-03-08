import { tarea } from "./itemTarea.js";

function consultarTareaBackend(){
    fetch('http://localhost:3000/tareas')
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => cargarTareasDOM(data)) // Muestra los datos en la consola
    .catch(error => console.error('Error:', error)); // Manejo de errores

}
function cargarTareasDOM(data){
    let Dom = document.querySelector("#root");
    Dom.appendChild(renderTareas(data));
}

function renderTareas(data){
    
    let div = document.createElement('div');
    div.className = "div-tareas";

    //let titulo = document.createElement('h1');
    //titulo.textContent = "Today";
    //titulo.className = "task-title";
    //div.appendChild(titulo);

    data.forEach((e)=>{
        console.log(e.nombre_tarea);
        div.appendChild(tarea(e.nombre_tarea));
    });

    //div.appendChild(item(asignaciones));

    return div;

}

export {consultarTareaBackend };