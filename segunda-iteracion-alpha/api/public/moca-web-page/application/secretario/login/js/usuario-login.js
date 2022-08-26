const inputCedula = document.getElementById('txtcedula');
const inputContrasenia = document.getElementById('contrasenia');

const validar = () => {
    let error = false;

    if (inputCedula.value == '') {
        error = true;
        inputCedula.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-cedula')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-cedula';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese la cédula</p>';
            inputCedula.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputCedula.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-cedula')) {
            document.querySelector('#error-cedula').remove();
        }
    }

    if (inputContrasenia.value == '') {
        error = true;
        inputContrasenia.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-contrasenia')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-contrasenia';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese la contraseña</p>';
            inputContrasenia.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputContrasenia.classList.remove('input-error');
        if (document.querySelector('#error-contrasenia')) {
            document.querySelector('#error-contrasenia').remove();
        }
    }

    /*
        Validaciones de todos los campos:
            1. Validación del correo
                Si el campo de correo esta vacío:
                    - variable error pasa a true
                    - el borde de el campo de correo se pinta de rojo u otro color (menos azul o verde)
                Si no (el campo está lleno):
                    - Asegurarnos de que no este pintado el borde de rojo
            2. Validación del nombre
            3. Validación del género
    */

    //Si hay error (error == true) se muestra un mensaje y no se permite obtener los datos
    //Si no hay error (error == false), entonces se obtienen los datos del formulario 
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {
    //Variable de tipo JSON
    let usuario = {
        'cedula': inputCedula.value,
        'contrasenia': inputContrasenia.value,
    };

    console.log(usuario);
    //Imprimir valores específicos de la variable json

    //Funcionalidad TEMPORAL para la retroalimentación positiva
    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'El usuario se inició adecuadamente',
        'confirmButtonText': 'Entendido'
    });

    //redirigir a la pagina de homepage en la carpteda cliente
    setTimeout(() => {
        window.location.href = '../homepage/index.html';
    }
        , 4000);
};

btnIniciar.addEventListener('click', validar);