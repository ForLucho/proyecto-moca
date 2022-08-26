const inputMascota = document.getElementById('txtmascota');
const selectEntrada = document.getElementById('fechaentrada');
const selectSalida = document.getElementById('fechasalida');
const inputHabitacion = document.getElementById('txthabitacion');
const inputMensaje = document.getElementById('txtmensaje');
const btnRegistrar = document.getElementById('btn-registrar');
let sesion = JSON.parse(sessionStorage.getItem('usuario'));
//asignar la cedula de la session en una varible y hacer un console.log
let cedula = sesion.cedula;

const validar = () => {
    let error = false;

    if (inputMascota.value == '') {
        error = true;
        inputMascota.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-mascota')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-mascota';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese una mascota</p>';
            inputMascota.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputMascota.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-mascota')) {
            document.querySelector('#error-mascota').remove();
        }
    }

    if (selectEntrada.value == '') {
        error = true;
        selectEntrada.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-fechaentrada')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-fechaentrada';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese una fecha de entrada</p>';
            selectEntrada.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        selectEntrada.classList.remove('input-error');
        if (document.querySelector('#error-fechaentrada')) {
            document.querySelector('#error-fechaentrada').remove();
        }
    }

    if (selectSalida.value == '') {
        error = true;
        selectSalida.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-fechasalida')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-fechasalida';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese una fecha de salida</p>';
            selectSalida.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        selectSalida.classList.remove('input-error');
        if (document.querySelector('#error-fechasalida')) {
            selectSalida.nextElementSibling.remove();
        }
    }

    if (inputHabitacion.value == '') {
        error = true;
        inputHabitacion.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-habitacion')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-habitacion';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese una habitación</p>';
            inputHabitacion.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputHabitacion.classList.remove('input-error');
        if (document.querySelector('#error-habitacion')) {
            inputHabitacion.nextElementSibling.remove();
        } 
    }

    if (inputMensaje.value == '') {
        error = true;
        inputMensaje.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-mensaje')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-mensaje';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese un mensaje</p>';
            inputMensaje.insertAdjacentElement('afterend', mensajeError);
        }
    } else {
        inputMensaje.classList.remove('input-error');
        if (document.querySelector('#error-mensaje')) {
            inputMensaje.nextElementSibling.remove();
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
    let hotel = {

        //obtener cedula de la variable cedula
        'cedula': cedula,
        'mascota': inputMascota.value,
        'fechaentrada': selectEntrada.value,
        'fechasalida': selectSalida.value,
        'habitacion': inputHabitacion.value,
        'observaciones': inputMensaje.value
    };
    //usar axios para hacer el registro del usuario
    axios({
        method: 'post',
        url: '/api/hotel',
        data: hotel
        
    }).then(function (response) {
        
        console.log(response);

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'El registro se registro adecuadamente',
            'confirmButtonText': 'Entendido'
        });
    }).catch(function (error) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
        console.log(error);
    }
    );
};

btnRegistrar.addEventListener('click', validar);