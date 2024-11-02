document.addEventListener('DOMContentLoaded', function() {
    const nightIcon = document.getElementById('nightIcon');
    const body = document.body;
    let isNightMode = false; // Modo día es el predeterminado

    nightIcon.addEventListener('click', function() {
        console.log("Icono clicado"); // Para verificar si el clic se detecta

        // Cambiar el estado del modo
        isNightMode = !isNightMode;

        // Cambiar el fondo del body
        body.style.backgroundColor = isNightMode ? '#2c3e50' : '#ecf0f1'; // Color oscuro o claro
        body.style.color = isNightMode ? '#ecf0f1' : '#2c3e50'; // Color de texto

        // Cambiar el estilo de las tarjetas
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = isNightMode ? '#34495e' : '#fff'; // Color de fondo de la tarjeta
            card.style.color = isNightMode ? '#ecf0f1' : '#2c3e50'; // Color de texto en la tarjeta
        });

        // Cambiar el estilo de los botones
        const buttons = document.querySelectorAll('.card .btn');
        buttons.forEach(button => {
            if (isNightMode) {
                button.classList.add('night'); // Añadir clase para modo noche
                button.classList.remove('day'); // Asegurarse de que la clase de día no esté presente
            } else {
                button.classList.remove('night'); // Quitar clase para modo noche
                button.classList.add('day'); // Añadir clase para modo día
            }
        });

        // Cambiar el icono
        const iconImage = nightIcon.querySelector('img');
        iconImage.src = isNightMode ? '/img/soleado.png' : '/img/luna.png'; // Cambia las imágenes
        iconImage.alt = isNightMode ? 'Cambiar a modo día' : 'Cambiar a modo noche'; // Cambia el texto alternativo
    });
});
