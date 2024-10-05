// Selecciona el botón del DOM
const colorButton = document.getElementById('colorButton');

// Función para cambiar el color de fondo
function changeBackgroundColor() {
    // Genera un color hexadecimal aleatorio
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambia el color de fondo del body
    document.body.style.backgroundColor = randomColor;
}

// Asigna la función al evento 'click' del botón
colorButton.addEventListener('click', changeBackgroundColor);