const inputMascota = document.getElementById('txtmascota');
const selectCita = document.getElementById('fechacita');
const selectMotivo = document.getElementById('motivocita');
const inputHora = document.getElementById('horacita');
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

    if (selectCita.value == '') {
        error = true;
        selectCita.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-fechaentrada')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-fechaentrada';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese una fecha para la cita</p>';
            selectCita.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        selectCita.classList.remove('input-error');
        if (document.querySelector('#error-fechaentrada')) {
            document.querySelector('#error-fechaentrada').remove();
        }
    }

    if (selectMotivo.value == '') {
        error = true;
        selectMotivo.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-fechasalida')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-fechasalida';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el motivo de la cita</p>';
            selectMotivo.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        selectMotivo.classList.remove('input-error');
        if (document.querySelector('#error-fechasalida')) {
            selectMotivo.nextElementSibling.remove();
        }
    }

    if (inputHora.value == '') {
        error = true;
        inputHora.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-habitacion')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-habitacion';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese la hora de la cita</p>';
            inputHora.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputHora.classList.remove('input-error');
        if (document.querySelector('#error-habitacion')) {
            inputHora.nextElementSibling.remove();
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

    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados en color rojo',
            'confirmButtonText': 'Entendido'
        });

    } else {
        obtenerDatos();
    }

};

const obtenerDatos = () => {
    //Variable de tipo JSON
    let hotel = {
        'cedula': cedula,
        'mascota': inputMascota.value,
        'fecha': selectCita.value,
        'motivo': selectMotivo.value,
        'hora': inputHora.value,
        'observaciones': inputMensaje.value
    };
    //usar axios para hacer el registro del usuario
    axios({
        method: 'post',
        url: '/api/cita',
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