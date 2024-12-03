/* document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('.login-form');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'La contraseña no puede estar vacía.');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showError(input, message) {
        let error = document.createElement('div');
        error.className = 'error-message';
        error.innerText = message;
        input.parentElement.insertBefore(error, input);
        input.classList.add('error');
    }

    function clearErrors() {
        let errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());

        let inputs = document.querySelectorAll('.error');
        inputs.forEach(input => input.classList.remove('error'));
    }
}); */

let form = document.querySelector('.login-form');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

function validar() {
    clearErrors();

    let isValid = true;

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Este campo no puede estar vacío.');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Por favor, introduce un correo electrónico válido.');
        isValid = false;
    }


    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Este campo no puede estar vacío.');
        isValid = false;
    } else if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número.');
        isValid = false;
    }

    return isValid;
}
function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
}

function showError(input, message) {
    let error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;
    input.parentElement.insertBefore(error, input);
    input.classList.add('error');
}

function clearErrors() {
    let errors = document.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());

    let inputs = document.querySelectorAll('.error');
    inputs.forEach(input => input.classList.remove('error'));
}
