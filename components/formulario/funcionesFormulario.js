import { consultarTareaBackend } from "../tareas/tareas.js";

function agregarTarea(){

    //En esta variable va a almacenar aquel elemento cuya clase se llama entradaformulaio, esto va a recuperar su contenido, ya sea texto etc.
   let tareaForm = document.querySelector(".fori").value; 

   fetch('http://localhost:3000/agregar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre_tarea: tareaForm,
      estado: 'pendiente'
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al guardar la tarea');
    }
    return response.json();
  })
  .then(data => {
    console.log('Tarea agregada con éxito:', data);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });
  document.querySelector("#root").innerHTML="";

}
export {agregarTarea}

