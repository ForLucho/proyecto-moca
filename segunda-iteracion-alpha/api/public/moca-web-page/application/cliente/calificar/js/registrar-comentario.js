const starRanking = document.getElementById('star-ranking');
starRanking.value = '';
const cambiarValor = (e) => {
        starRanking.value = '';
        starRanking.value = e;
}
const textareaMensaje = document.getElementById('txtmensaje');
const btnRegistrar = document.getElementById('btn-registrar');

const validar = () => {
    let error = false;

    if (selectMedico.value == '') {
        error = true;
        selectMedico.classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-medico')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-medico';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Seleccione un médico</p>';
            selectMedico.insertAdjacentElement('afterend', mensajeError);
        }


    } else {
        selectMedico.classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-medico')) {
            document.querySelector('#error-medico').remove();
        }
    }

    //validar el campo de ranking
    if (document.getElementById('star-ranking').value == '') {
        error = true;
        document.getElementById('star-ranking').classList.add('input-error');
        //comprobar si existe un mensaje de error sino crearlo
        if (!document.querySelector('#error-ranking')) {
            const mensajeError = document.createElement('div');
            mensajeError.id = 'error-ranking';
            mensajeError.innerHTML = '<p class="error-text"><i class="fas fa-exclamation-triangle fa-fw"></i>Seleccione una calificación</p>';
            document.getElementById('star-ranking').insertAdjacentElement('afterend', mensajeError);
        }
    } else {
        document.getElementById('star-ranking').classList.remove('input-error');
        //comprobar si existe un mensaje de error para eliminarlo
        if (document.querySelector('#error-ranking')) {
            document.querySelector('#error-ranking').remove();
        }
    }



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
    let ranking = {
        'cedula': selectMedico.value,
        //extraer el texto del nombre del medico
        'nombre': selectMedico.options[selectMedico.selectedIndex].text,
        'ranking': document.getElementById('star-ranking').value,
        'mensaje': textareaMensaje.value,
    };

    //usar axios para hacer el registro del usuario
    axios({
        method: 'post',
        url: '/api/ranking-medico',
        data: ranking
        
    }).then(function (response) {
        
        console.log(response);

        Swal.fire({
            'icon': 'success',
            'title': 'Datos ingresados correctamente',
            'text': 'La calificación se registro adecuadamente',
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