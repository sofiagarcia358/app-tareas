import { registrarse } from "../Registrarse/registrarse.js";

// Función para obtener los usuarios del backend
async function obtenerUsuarios() {
    try {
        const response = await fetch("http://localhost:3000/usuarios");
        if (!response.ok) {
            throw new Error("Error al obtener usuarios");
        }
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        return []; // Retorna un array vacío en caso de error
    }
}

export function login() {
    const contenedor = document.createElement("div");
    contenedor.classList.add("login-container");

    contenedor.innerHTML = `
        <div class="login-card">
            <img src="./assets/logo.png" alt="Logo" class="login-logo">
            <h2>Iniciar Sesión</h2>
            <form id="loginForm">
                <input type="text" id="usuario" placeholder="Usuario" required>
                <input type="password" id="password" placeholder="Contraseña" required>
                <button type="submit">Ingresar</button>
                <p id="errorMensaje" class="error-message"></p>
            </form>
            <button id="registrarseBtn" class="register-btn">Registrarme</button>
        </div>
    `;

    // Evento para el login
    contenedor.querySelector("#loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const usuarioInput = contenedor.querySelector("#usuario").value;
        const passwordInput = contenedor.querySelector("#password").value;
        const errorMensaje = contenedor.querySelector("#errorMensaje");

        try {
            // Enviar credenciales al backend para verificar autenticación
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuario: usuarioInput,
                    contraseña: passwordInput,
                }),
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();

            // Si el backend confirma el usuario, guardar la sesión y cargar la app
            sessionStorage.setItem("autenticado", "true");
            sessionStorage.setItem("usuario", data.usuario); // Guarda el usuario autenticado
            location.reload(); // Recarga la página para cargar la app
        } catch (error) {
            errorMensaje.textContent = "Usuario o contraseña incorrectos";
        }
    });

    // Evento para el botón de registro
    contenedor.querySelector("#registrarseBtn").addEventListener("click", () => {
        let root = document.querySelector("#root");
        root.innerHTML = ""; // Borra el contenido actual
        root.appendChild(registrarse()); // Carga la pantalla de registro
    });

    return contenedor;
}
