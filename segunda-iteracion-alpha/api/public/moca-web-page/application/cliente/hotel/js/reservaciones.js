let usuarios = [{
    'cedula': 'Kira',
    'mascota': 'Kira',
    'fechaentrada': '28/01/2022',
    'fechasalida': '03/02/2022',
    'habitacion': '52',
    'observaciones': 'No aplica'
}, {
    'cedula': 'Kira',
    'mascota': 'Luna',
    'fechaentrada': '02/02/2022',
    'fechasalida': '07/02/2022',
    'habitacion': '43',
    'observaciones': 'No aplica'
}, {
    'cedula': 'Kira',
    'mascota': 'Mia',
    'fechaentrada': '15/02/2022',
    'fechasalida': '21/02/2022',
    'habitacion': '60',
    'observaciones': 'No aplica'
}, {
    'cedula': 'Kira',
    'mascota': 'Torbe',
    'fechaentrada': '16/03/2022',
    'fechasalida': '21/03/2022',
    'habitacion': '13',
    'observaciones': 'No aplica'
},{
    'cedula': 'Kira',
    'mascota': 'Luma',
    'fechaentrada': '08/04/2022',
    'fechasalida': '13/04/2022',
    'habitacion': '28',
    'observaciones': 'No aplica'
},{
    'cedula': 'Kira',
    'mascota': 'Doki',
    'fechaentrada': '02/06/2022',
    'fechasalida': '07/06/2022',
    'habitacion': '30',
    'observaciones': 'No aplica'
},{
    'cedula': 'Kira',
    'mascota': 'Boby',
    'fechaentrada': '22/07/2022',
    'fechasalida': '27/07/2022',
    'habitacion': '14',
    'observaciones': 'No aplica'
}];

let usuarios1 = [{}, {}, {}, {}];

//axios para extraer usuarios de la base de datos
axios({
    method: 'get',
    url: '/api/hotel',
    
}).then(function (response) {
    console.log(response.data.lista);
    usuarios = response.data.lista;
    llenarTabla();
}
).catch(function (error) {
    console.log(error);
}
);