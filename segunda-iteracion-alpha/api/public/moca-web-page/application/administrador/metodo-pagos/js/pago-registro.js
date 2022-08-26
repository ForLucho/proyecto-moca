const inputNombre = document.getElementById('txtnombre');
const inputTarjeta = document.getElementById('fechaverificacion');
const selectVencimento = document.getElementById('fechavencimiento');
const inputCodigoCVV = document.getElementById('codigocvv');
const btnRegistrar = document.getElementById('btn-registrar');
const inputCodigoTran = document.getElementById('codigo-tran');
const inputMetodo = document.getElementById('txt-metodo');

const validar = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-mascota')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-mascota';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el nombre de la tarjeta</p>';
            inputNombre.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputNombre.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-mascota')) {
            document.querySelector('#error-mascota').remove();
        }
    }

    if (selectVencimento.value == '') {
        error = true;
        selectVencimento.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-fechaentrada')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-fechaentrada';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese la fecha de vencimiento</p>';
            selectVencimento.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        selectVencimento.classList.remove('input-error');
        if (document.querySelector('#error-fechaentrada')) {
            document.querySelector('#error-fechaentrada').remove();
        }
    }

    if (inputTarjeta.value == '') {
        error = true;
        inputTarjeta.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-tarjeta')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-tarjeta';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese los numeros de la tarjeta</p>';
            inputTarjeta.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputTarjeta.classList.remove('input-error');
        if (document.querySelector('#error-tarjeta')) {
            inputTarjeta.nextElementSibling.remove();
        }
    }

    if (inputCodigoCVV.value == '') {
        error = true;
        inputCodigoCVV.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-habitacion')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-habitacion';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el codigo CVV</p>';
            inputCodigoCVV.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputCodigoCVV.classList.remove('input-error');
        if (document.querySelector('#error-habitacion')) {
            inputCodigoCVV.nextElementSibling.remove();
        }
    }

    if (inputCodigoTran.value == '') {
        error = true;
        inputCodigoTran.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-habitacion')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-habitacion';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el codigo de transacción CVV</p>';
            inputCodigoTran.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputCodigoTran.classList.remove('input-error');
        if (document.querySelector('#error-habitacion')) {
            inputCodigoTran.nextElementSibling.remove();
        }
    }





    if (inputMetodo.value == '') {
        error = true;
        inputMetodo.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-habitacion')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-habitacion';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el metodo de pago CVV</p>';
            inputMetodo.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputMetodo.classList.remove('input-error');
        if (document.querySelector('#error-habitacion')) {
            inputMetodo.nextElementSibling.remove();
        }
    }


    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados en color rojo',
            'confirmButtonText': 'Revisar'
        });

    } else {
        obtenerDatos();
    }

};


const obtenerDatos = () => {

    //Variable de tipo JSON
    let pago = {
        'nombre': inputNombre.value,
        'numerotarjeta': inputTarjeta.value,
        'fecha': selectVencimento.value,
        'cvv': inputCodigoCVV.value,
        'codigo': inputCodigoTran.value,
        'metodo': inputMetodo.value

    };

    //usar axios para hacer el registro del usuario
    axios({
        method: 'post',
        url: '/api/pago',
        data: pago

    }).then(function(response) {

        console.log(response);

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'El método se registro adecuadamente',
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
};

btnRegistrar.addEventListener('click', validar);