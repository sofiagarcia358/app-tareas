function header(){
    let header = document.createElement('header');
    header.className = "header";

    let logo = document.createElement('img');
    logo.src = "https://img.freepik.com/vector-gratis/plantilla-logotipo-computadora-tecnologia_23-2149204144.jpg";
    logo.alt = "logo";
    header.appendChild(logo);

    let texto = document.createElement('h1');
    texto.textContent = "proyecto App";
    header.appendChild(texto);

    return header;

}

export{ header }