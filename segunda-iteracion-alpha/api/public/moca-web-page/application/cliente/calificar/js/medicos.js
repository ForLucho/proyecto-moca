let medicos = [{
    'cedula': '301530321',
    'tipousuario': 'médico',
    'nombre':'Luis',
    'apellido':'Monge',
    'provincia':'San Jose',
    'correo':'luismonge@gmail.com',
    'numero': '88888888'

}, {
    'cedula': '301530321',
    'tipousuario': 'médico',
    'nombre':'Luis',
    'apellido':'Monge',
    'provincia':'San Jose',
    'correo':'luismonge@gmail.com',
    'numero': '88888888'

}, {
    'cedula': '301530321',
    'tipousuario': 'médico',
    'nombre':'Luis',
    'apellido':'Monge',
    'provincia':'San Jose',
    'correo':'luismonge@gmail.com',
    'numero': '88888888'
}];

let medicos1 = [{}, {}, {}, {}, {}, {}, {}];

//axios para extraer usuarios de la base de datos
axios({
    method: 'GET',
    url: '/api/lista-usuarios?tipousuario=medico'
    
}).then(function (response) {
    console.log(response.data.lista);
    medicos = response.data.lista;
    llenarSeccion();
}
).catch(function (error) {
    console.log(error);
}
);
