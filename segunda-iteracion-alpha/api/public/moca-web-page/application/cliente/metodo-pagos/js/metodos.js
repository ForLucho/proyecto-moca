let metodos = [{
    'nombre': 'Alessandro',
    'fecha': '2022-08',
    'numerotarjeta': '1234',
    'cvv': '123',
}, {
    'nombre': 'Alessandro',
    'fecha': '2022-08',
    'numerotarjeta': '1234',
    'cvv': '123',
}, {
    'nombre': 'Alessandro',
    'fecha': '2022-08',
    'numerotarjeta': '1234',
    'cvv': '123',
}, {
    'nombre': 'Alessandro',
    'fecha': '2022-08',
    'numerotarjeta': '1234',
    'cvv': '123',
}];


let metodos1 = [{}, {}, {}, {}, {}, {}, {}];

//axios para extraer usuarios de la base de datos
axios({
    method: 'get',
    url: '/api/pago',
    
}).then(function (response) {
    console.log(response.data.lista);
    metodos = response.data.lista;
    llenarSeccion();
}
).catch(function (error) {
    console.log(error);
}
);