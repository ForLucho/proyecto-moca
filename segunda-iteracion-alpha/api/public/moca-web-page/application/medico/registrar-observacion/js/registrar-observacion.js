const selectMascota = document.getElementById('txtmascota');
const textareaMensaje = document.getElementById('txtmensaje');

const validar = () => {
    let error = false;

    if (selectMascota.value == '') {
        error = true;
        selectMascota.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-mascota')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-mascota';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Seleccione una mascota</p>';
            selectMascota.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        selectMascota.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-mascota')) {
            document.querySelector('#error-mascota').remove();
        }
    }

    if (textareaMensaje.value == '') {
        error = true;
        textareaMensaje.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-mensaje')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-mensaje';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese un mensaje</p>';
            textareaMensaje.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        textareaMensaje.classList.remove('input-error');
        if (document.querySelector('#error-mensaje')) {
            document.querySelector('#error-mensaje').remove();
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
        'mascota': selectMascota.value,
        'mensaje': textareaMensaje.value,
    };

    console.log(usuario);
    //Imprimir valores específicos de la variable json

    //Funcionalidad TEMPORAL para la retroalimentación positiva
    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'Se registro una observación de manera exitosa',
        'confirmButtonText': 'Entendido'
    });

    //redirigir a la pagina de homepage en la carpteda cliente
    setTimeout(() => {
        window.location.href = '../observaciones-mascotas/observaciones.html';
    }
        , 3000);
};

btnEnviar.addEventListener('click', validar);