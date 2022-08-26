const registrarDatos = async(endpoint, data, redireccion) => {
    let url = `http://localhost:3000/api/${endpoint}`;

    await axios({
        'url': '/api/pago',
        'method': 'post',
        'responseType': 'json',
        'data': data
    }).then(response => {
        Swal.fire({

            'icon': 'success',
            'title': 'Datos guardados',
            'text': "Reservación generada exitosamente",
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.href = redireccion;
        });
    }).catch(error => {
        Swal.fire({

            'icon': 'error',
            'title': 'Ha ocurrido un error',
            'text': error
        })
    });

};

const getDatos = async(endpoint) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    let pagos = [];
    await axios({
            url: '/api/pago',
            method: 'get',
            responseType: 'json'
        })
        .then(response => {
            pagos = response.data.lista;
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                text: error
            });
        });

    return pagos;
};

const eliminarDatos = async(endpoint, _id) => {
    let url = `http://localhost:3000/api/${endpoint}`;
    await axios({
        'url': url,
        'method': 'delete',
        'responseType': 'json',
        'data': {
            '_id': _id
        }
    }).then(response => {
        Swal.fire({
            'icon': 'success',
            'title': response.data.msj,
            'confirmButtonText': 'Entendido'
        }).then(() => {
            window.location.reload();
        });

    }).catch(error => {
        Swal.fire({
            icon: 'error',
            text: error
        });
    });
};