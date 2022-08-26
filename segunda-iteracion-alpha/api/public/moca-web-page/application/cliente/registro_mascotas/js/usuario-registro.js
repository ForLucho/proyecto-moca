const inputNombre = document.getElementById('txtnombre');
const inputDireccion = document.getElementById('txtdireccion');
const btnRegistrar = document.getElementById('btn-registrar');
let sesion = JSON.parse(sessionStorage.getItem('usuario'));
let numero = sesion.numero;
let nombreapellido = sesion.nombre + ' ' + sesion.apellido;

const validar = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-nombre')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-nombre';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese un nombre</p>';
            inputNombre.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        inputNombre.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-nombre')) {
            document.querySelector('#error-nombre').remove();
        }
    }

    if (inputDireccion.value == '') {
        error = true;
        inputDireccion.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-direccion')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-direccion';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Ingrese una dirección</p>';
            inputDireccion.insertAdjacentElement('afterend', mensajeError);
        }

    } else {
        inputDireccion.classList.remove('input-error');
        if (document.querySelector('#error-direccion')) {
            document.querySelector('#error-direccion').remove();
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
        'nombre': inputNombre.value,
        'estado': "saludable",
        'direccion': inputDireccion.value,
        'dueño': nombreapellido,
        'telefono': numero
    };

    //usar axios para hacer el registro del usuario
    axios({
        method: 'post',
        url: '/api/mascota',
        data: usuario
        
    }).then(function (response) {
        
        console.log(response);

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'La mascota se registro adecuadamente',
            'confirmButtonText': 'Entendido'
        });
    }).catch(function (error) {
        Swal.fire({
            'icon': 'error',
            'title': 'Error al registrar la mascota',
            'text': 'Por favor intente nuevamente',
            'confirmButtonText': 'Entendido'
        });
        console.log(error);
    }
    );
};

btnRegistrar.addEventListener('click', validar);