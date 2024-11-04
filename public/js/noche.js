document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('switch');
    const body = document.body;
    
    // Recuperar el estado del modo desde localStorage
    const savedMode = localStorage.getItem('nightMode');
    let isNightMode = savedMode === 'true'; // Determinar si se debe aplicar el modo noche

    // Aplicar el modo recuperado al cargar la página
    switchInput.checked = isNightMode;
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
            button.classList.add('night');
            button.classList.remove('day');
        } else {
            button.classList.remove('night');
            button.classList.add('day');
        }
    });

    switchInput.addEventListener('change', function() {
        console.log("Interruptor clicado");

        // Cambiar el estado del modo
        isNightMode = switchInput.checked;

        // Cambiar el fondo del body
        body.style.backgroundColor = isNightMode ? '#2c3e50' : '#ecf0f1';
        body.style.color = isNightMode ? '#ecf0f1' : '#2c3e50';

        // Cambiar el estilo de las tarjetas
        cards.forEach(card => {
            card.style.backgroundColor = isNightMode ? '#34495e' : '#fff';
            card.style.color = isNightMode ? '#ecf0f1' : '#2c3e50';
        });

        // Cambiar el estilo de los botones
        buttons.forEach(button => {
            if (isNightMode) {
                button.classList.add('night');
                button.classList.remove('day');
            } else {
                button.classList.remove('night');
                button.classList.add('day');
            }
        });

        // Guardar el estado del modo en localStorage
        localStorage.setItem('nightMode', isNightMode);
    });
});
