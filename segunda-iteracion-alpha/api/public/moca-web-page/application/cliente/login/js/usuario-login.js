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

const userIfAny = async (data = {}, campos = []) => {
    let userData = null;

    try {
        if (data.cedula.toString().trim().length === 0) {
            throw new Error('Cédula inválida');
        } else if (data.contrasenia.toString().trim() === '') {
            throw new Error('Contraseña inválida');
        }

        const request = await axios({
            method: 'POST',
            url: '/api/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
        });

        const result = request.data;
        const status = request.status;
        if (result.length && status === 200) {
            userData = result[0];
        } else {
            userData = null;
        }
    } catch (e) {
        userData = null;
        console.error(e);
    }

    return userData;
};

const obtenerDatos = async() => {
    //Variable de tipo JSON
    let usuario = {
        'cedula': inputCedula.value,
        'contrasenia': inputContrasenia.value,
    };

    console.log(usuario);
    let user = await userIfAny(usuario, ['cedula', 'contrasenia']);	//Se obtiene el usuario de la base de datos
    if (user) {

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'El usuario se inició adecuadamente',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            sessionStorage.setItem('usuario', JSON.stringify(user));
            window.location.href = '../homepage/index.html';
            //aceder al usuario
            //JSON.parse(sessionStorage.getItem('usuario'));

        });

        //Se crea una sesión para el usuario
        sessionStorage.setItem('usuario', JSON.stringify(user));
    }
    else{
        Swal.fire({
            'icon': 'error',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        });
    }
};

btnIniciar.addEventListener('click', validar);