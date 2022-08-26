let usuarios = [{
    'mascota': 'Chily',
    'fecha': '27/07/2022',
    'motivo': 'Cita',
    'hora': '8:00 a.m',
    'observaciones': '8:00 a.m',
}];

let usuarios1 = [{}, {}, {}, {}, {}, {}, {}];


//axios para extraer usuarios de la base de datos
axios({
    method: 'get',
    url: '/api/cita',
    
}).then(function (response) {
    console.log(response.data.lista);
    usuarios = response.data.lista;
    llenarTabla();
}
).catch(function (error) {
    console.log(error);
}
);
