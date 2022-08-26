let observaciones = [{
    'cedula': '301530321',
    'nombre': 'D01',
    'observacion': 'Doctor(a)',
    'doctor': 'Alicia Carvajal Muñoz',
    'correo': 'acarbajal@gmail.com',
    'telefono': '8754 2212',
    'provincia': 'Cartago'

}, {
    'fecha': '101230981',
    'servicio': 'D02',
    'observacion': 'Doctor(a)',
    'doctor': 'Anabelle Samora Umaña',
    'correo': 'asamora@gmail.com',
    'telefono': '8754 4538',
    'provincia': 'San José'

}, {
    'fecha': '709910145',
    'servicio': 'D03',
    'observacion': 'Doctor(a)',
    'doctor': 'Julian Johnson Montoya',
    'correo': 'jmonto@gmail.com',
    'telefono': '8912 2712',
    'provincia': 'Limón'

}, {
    'fecha': '305450321',
    'servicio': 'C01',
    'observacion': 'Cliente',
    'doctor': 'Juan Torres Arias',
    'correo': 'jtorres@gmail.com',
    'telefono': '8765 1233',
    'provincia': 'Cartago'

}, {
    'fecha': '101230379',
    'servicio': 'C02',
    'observacion': 'Cliente',
    'doctor': 'Luis Samora Rojas',
    'correo': 'lrojas@gmail.com',
    'telefono': '8911 1234',
    'provincia': 'San José'

}, {
    'fecha': '301230321',
    'servicio': 'A01',
    'observacion': 'Administrador',
    'doctor': 'Alicia Muñoz Carvajal',
    'correo': 'amuñocar@gmail.com',
    'telefono': '6578 8712',
    'provincia': 'Cartago'

}, {
    'fecha': '401770821',
    'servicio': 'A02',
    'observacion': 'Administrador',
    'doctor': 'Luis Calvo Aguilar',
    'correo': 'lcalagui@gmail.com',
    'telefono': '8754 3333',
    'provincia': 'Heredia'

}, {
    'fecha': '601230321',
    'servicio': 'S01',
    'observacion': 'Secretaria',
    'doctor': 'María Solís Muñoz',
    'correo': 'marisolis@gmail.com',
    'telefono': '6634 2212',
    'provincia': 'Puntarenas'

}];

let observaciones1 = [{}, {}, {}, {}, {}, {}, {}];

//axios para extraer usuarios de la base de datos
axios({
    method: 'get',
    url: '/api/lista-usuarios',
    
}).then(function (response) {
    console.log(response.data.lista);
    observaciones = response.data.lista;
    llenarTabla();
}
).catch(function (error) {
    console.log(error);
}
);
