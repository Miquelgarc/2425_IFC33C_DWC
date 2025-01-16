document.addEventListener('DOMContentLoaded', cargaDOM);

function cargaDOM() {

    // Adding event listeners
    document.getElementById('divElement').addEventListener('click', (event) => {
        logEvent('Div', 'capture');
    }, true);

    document.getElementById('divElement').addEventListener('click', (event) => {
        logEvent('Div', 'bubble');
    });

    document.getElementById('sectionElement').addEventListener('click', (event) => {
        logEvent('Section', 'capture');
    }, true);

    document.getElementById('sectionElement').addEventListener('click', (event) => {
        logEvent('Section', 'bubble');
    });

    document.getElementById('buttonElement').addEventListener('click', (event) => {
        logEvent('Button', 'capture');
        // Uncomment the next line to test stopPropagation
        event.stopPropagation();
    }, true);

    document.getElementById('buttonElement').addEventListener('click', (event) => {
        logEvent('Button', 'bubble');
    });
}

// Function to log events
function logEvent(element, phase) {
    console.log(`${element} - ${phase}`);
}
