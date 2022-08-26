const inputUsuario = document.getElementById('txtusuario');
const inputCedula = document.getElementById('txtcedula');
const inputNombre = document.getElementById('txtnombre');
const inputApellido = document.getElementById('txtapellido');
const selectProvincia = document.getElementById('txtprovincia');
const inputCorreo = document.getElementById('txtmail');
const inputNumtel = document.getElementById('numtelefono');
const inputContrasenia = document.getElementById('contrasenia');

const validar = () => {
    let error = false;


    if (inputUsuario.value == '') {
        error = true;
        inputUsuario.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-cedula')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-cedula';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese un tipo de usuario</p>';
            inputUsuario.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputUsuario.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-cedula')) {
            document.querySelector('#error-cedula').remove();
        }
    }



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

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-nombre')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-nombre';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese su nombre</p>';
            inputNombre.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputNombre.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-nombre')) {
            document.querySelector('#error-nombre').remove();
        }
    }

    if (inputApellido.value == '') {
        error = true;
        inputApellido.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-apellido')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-apellido';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese su apellido</p>';
            inputApellido.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputApellido.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-apellido')) {
            document.querySelector('#error-apellido').remove();
        }
    }

    if (selectProvincia.value == '') {
        error = true;
        selectProvincia.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-provincia')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-provincia';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese su provincia</p>';
            selectProvincia.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        selectProvincia.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-provincia')) {
            document.querySelector('#error-provincia').remove();
        }
    }

    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-correo')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-correo';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese su correo</p>';
            inputCorreo.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputCorreo.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-correo')) {
            document.querySelector('#error-correo').remove();
        }
    }

    if (inputNumtel.value == '') {
        error = true;
        inputNumtel.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-telefono')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-telefono';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese su teléfono</p>';
            inputNumtel.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputNumtel.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-telefono')) {
            document.querySelector('#error-telefono').remove();
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
        'usuario': inputCedula.value,
        'cedula': inputCedula.value,
        'nombre': inputNombre.value,
        'apellido': inputApellido.value,
        'provincia': selectProvincia.value,
        'correo': inputCorreo.value,
        'numero': inputNumtel.value,
        'contrasenia': inputContrasenia.value,
    };
    //usar axios para hacer el registro del usuario
    axios({
        method: 'post',
        url: '/api/signup',
        data: usuario

    }).then(function(response) {

        console.log(response);

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'El usuario se inició adecuadamente',
            'confirmButtonText': 'Entendido'
        });
    }).catch(function(error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
        console.log(error);
    });

    setTimeout(() => {
        window.location.href = '../perfil-de-usuario/perfil-usuario.html';
    }, 4000);
};

btnRegistrar.addEventListener('click', validar);