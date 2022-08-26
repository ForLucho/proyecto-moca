let mascota = [{
    'nombre': 'Bruno',
    'estado': 'saludable',
    'direccion': 'WW44+4HF, López Mateos, San José',
    'dueño': 'Alonso Fonseca',
    'telefono': '11114444',
}, {
    'nombre': 'Bruno',
    'estado': 'saludable',
    'direccion': 'WW44+4HF, López Mateos, San José',
    'dueño': 'Alonso Fonseca',
    'telefono': '11114444',
}];


let mascota1 = [{}, {}, {}, {}, {}, {}, {}];

//axios para extraer mascotas de la base de datos donde el telefono del dueño sea el mismo que el telefono del usuario
axios({
    method: 'get',
    url: '/api/mascota',
    params: {
        telefono: localStorage.getItem('telefono')
    }
}).then(function (response) {
    console.log(response.data.lista);
    mascota = response.data.lista;
    llenarSeccion();
}
).catch(function (error) {
    console.log(error);
}
);






