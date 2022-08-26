const inputCardName = document.getElementById('txtcardname');
const inputZip = document.getElementById('zipcode');
const inputCardNum = document.getElementById('cardnum');
const inputExpMonth = document.getElementById('expiry-month');
const inputExpyear = document.getElementById('expiry-year');
const inputCVV = document.getElementById('cvvcode');
const btnProcesar = document.getElementById('btn-procesar');

const validar = () => {
    let error = false;

    if (inputCardName.value == '') {
        error = true;
        inputCardName.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-cardname')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-cardname';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el nombre del emisor de la tarjeta</p>';
            inputCardName.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputCardName.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-cardname')) {
            document.querySelector('#error-cardname').remove();
        }
    }

    if (inputZip.value == '') {
        error = true;
        inputZip.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-zipcode')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-zipcode';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el código postal</p>';
            inputZip.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputZip.classList.remove('input-error');
        if (document.querySelector('#error-zipcode')) {
            document.querySelector('#error-zipcode').remove();
        }
    }

    if (inputCardNum.value == '') {
        error = true;
        inputCardNum.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-cardnum')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-cardnum';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el número de la tarjeta</p>';
            inputCardNum.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputCardNum.classList.remove('input-error');
        if (document.querySelector('#error-cardnum')) {
            document.querySelector('#error-cardnum').remove();
        }
    }

    if (inputExpMonth.value == '') {
        error = true;
        inputExpMonth.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-expmonth')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-expmonth';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el mes de vencimiento</p>';
            inputExpMonth.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputExpMonth.classList.remove('input-error');
        if (document.querySelector('#error-expmonth')) {
            document.querySelector('#error-expmonth').remove();
        }
    }

    if (inputExpyear.value == '') {
        error = true;
        inputExpyear.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-expyear')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-expyear';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el año de vencimiento</p>';
            inputExpyear.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputExpyear.classList.remove('input-error');
        if (document.querySelector('#error-expyear')) {
            document.querySelector('#error-expyear').remove();
        }
    }

    if (inputCVV.value == '') {
        error = true;
        inputCVV.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-cvv')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-cvv';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese el CVV</p>';
            inputCVV.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputCVV.classList.remove('input-error');
        if (document.querySelector('#error-cvv')) {
            document.querySelector('#error-cvv').remove();
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
        'cardname': inputCardName.value,
        'zipcode': inputZip.value,
        'cardnum': inputCardNum.value,
        'expmonth': inputExpMonth.value,
        'expyear': inputExpyear.value,
        'cvv': inputCVV.value
    };

    console.log(usuario);
    //Imprimir valores específicos de la variable json

    //Funcionalidad TEMPORAL para la retroalimentación positiva
    Swal.fire({
        'icon': 'success',
        'title': 'Datos ingresados correctamente',
        'text': 'La transacción se realizó de manera correcta',
        'confirmButtonText': 'Entendido'
    });

    setTimeout(() => {
        window.location.href = '../../reservacion-citas/reservacion-citas.html';
    }
        , 4000);
};

btnProcesar.addEventListener('click', validar);