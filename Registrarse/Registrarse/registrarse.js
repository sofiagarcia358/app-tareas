export function registrarse() {
  const contenedor = document.createElement("div");
  contenedor.classList.add("register-container");

  contenedor.innerHTML = `
      <div class="register-card">
          <h2>Registrarme</h2>
          <form id="registerForm">
              <input type="text" id="newUsuario" placeholder="Usuario" required>
              <input type="email" id="newCorreo" placeholder="Correo" required>
              <input type="password" id="newPassword" placeholder="Contraseña" required>
              <button type="submit">Registrarse</button>
              <p id="registerErrorMensaje" class="error-message"></p>
          </form>
          <button id="regresarBtn" class="back-btn">Regresar</button>
      </div>
  `;

  // 🔹 EVENTO DE REGISTRO (Aquí colocas tu código)
  contenedor.querySelector("#registerForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const usuario = document.getElementById("newUsuario").value;
      const correo = document.getElementById("newCorreo").value;
      const password = document.getElementById("newPassword").value;

      fetch("http://localhost:3000/registrar", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ usuario, contraseña: password, correo })
      })
      .then(response => response.json())
      .then(data => {
          if (data.error) {
              alert("Error: " + data.error);
          } else {
              alert("Usuario registrado con éxito");
              window.location.href = "login.html"; // Redirigir al login
          }
      })
      .catch(error => console.error("Error en el registro:", error));
  });

  // 🔹 BOTÓN PARA REGRESAR AL LOGIN
  contenedor.querySelector("#regresarBtn").addEventListener("click", () => {
      let root = document.querySelector("#root");
      root.innerHTML = ""; // Borra el contenido actual
      import("./login.js").then(module => {
          root.appendChild(module.login()); // Cargar pantalla de login
      });
  });

  return contenedor;
}
