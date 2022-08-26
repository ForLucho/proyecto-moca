let rankings = [{
    'ranking': '1.º lugar',
    'cedula': '123',
    'nombre': 'Alicia Carvajal'
}, {
    'ranking': '2.º lugar',
    'cedula': '213',
    'nombre': 'Anabelle Samora'
}, {
    'ranking': '3.º lugar',
    'cedula': '321',
    'nombre': 'Nikolas González'
}];

let rankings1 = [{}, {}, {}, {}, {}, {}, {}];

//axios para extraer mascotas de la base de datos donde el telefono del dueño sea el mismo que el telefono del usuario
axios({
    method: 'get',
    url: '/api/ranking-medico',

}).then(function (response) {

    console.log(response.data.lista);
    rankings = response.data.lista;
    llenarTabla();

}
).catch(function (error) {

    console.log(error);

}
);
