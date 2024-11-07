document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('switch');
    const body = document.body;

    // Recuperar el estado del modo desde localStorage
    const savedMode = localStorage.getItem('nightMode');
    let isNightMode = savedMode === 'true'; // Determinar si se debe aplicar el modo noche

    // Aplicar el modo recuperado al cargar la página
    switchInput.checked = isNightMode;
    updateStyles(isNightMode);

    switchInput.addEventListener('change', function() {
        console.log("Interruptor clicado");
        // Cambiar el estado del modo
        isNightMode = switchInput.checked;
        updateStyles(isNightMode);

        // Guardar el estado del modo en localStorage
        localStorage.setItem('nightMode', isNightMode);
    });

    function updateStyles(isNight) {
        // Cambiar el fondo del body
        body.style.backgroundColor = isNight ? '#2c3e50' : '#ecf0f1';
        body.style.color = isNight ? '#ecf0f1' : '#2c3e50';

        // Cambiar el estilo de las tarjetas
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.backgroundColor = isNight ? '#34495e' : '#fff';
            card.style.color = isNight ? '#ecf0f1' : '#2c3e50';
        });

        // Cambiar el estilo de los botones
        const buttons = document.querySelectorAll('.card .btn');
        buttons.forEach(button => {
            if (isNight) {
                button.classList.add('night');
                button.classList.remove('day');
            } else {
                button.classList.remove('night');
                button.classList.add('day');
            }
        });

        // Cambiar el color de los h2
        const h2s = document.querySelectorAll('.pod2');
        h2s.forEach(h2 => {
            h2.style.color = isNight ? '#ecf0f1' : '#2c3e50'; // Color blanco en modo noche
        });
    }
});