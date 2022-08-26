const cuerpoTabla = document.querySelector('#tbl-observaciones tbody');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    observaciones.forEach(observacionTemp => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = observacionTemp.fecha;
        fila.insertCell().textContent = observacionTemp.servicio;
        fila.insertCell().textContent = observacionTemp.observacion;
        fila.insertCell().textContent = observacionTemp.doctor;

    });

};


llenarTabla();