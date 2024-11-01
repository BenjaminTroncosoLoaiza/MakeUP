// public/js/noche.js
document.addEventListener('DOMContentLoaded', function () {
    const nightIcon = document.getElementById('nightIcon');
    const cards = document.querySelectorAll('.card');

    // Verifica si el elemento existe
    if (nightIcon) {
        nightIcon.addEventListener('click', () => {
            // Cambia el color de fondo
            if (document.body.style.backgroundColor === 'black') {
                document.body.style.backgroundColor = '#f4f4f4'; // Color de fondo original
                document.body.style.color = '#333'; // Color de texto original
                cards.forEach(card => {
                    card.style.backgroundColor = 'white'; // Color original de las tarjetas
                });
            } else {
                document.body.style.backgroundColor = 'black'; // Modo noche
                document.body.style.color = 'white'; // Cambia el color de texto para el modo noche
                cards.forEach(card => {
                    card.style.backgroundColor = '#333'; // Color oscuro para las tarjetas en modo noche
                });
            }
        });
    }
});
