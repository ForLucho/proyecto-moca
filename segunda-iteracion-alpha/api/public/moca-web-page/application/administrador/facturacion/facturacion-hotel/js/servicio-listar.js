const cuerpoTabla = document.querySelector('#tbl-servicios tbody');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    servicios.forEach(servicioTemp => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = servicioTemp.nombre;
        fila.insertCell().textContent = servicioTemp.cantidad;
        fila.insertCell().textContent = servicioTemp.precio;

    });

    //sumar los precios de todos los servicios
    let total = 0;
    servicios.forEach(servicioTemp => {
        total += parseInt(servicioTemp.precio);
    }
    );
    //mostar el total en el id service-total
    document.querySelector('#service-total').textContent = total;

    //agregar un simbolo de colon al inicio de cada precio
    let filas = document.querySelectorAll('#tbl-servicios tbody tr');
    filas.forEach(fila => {
        let celdas = fila.querySelectorAll('td:nth-child(3)');
        celdas.forEach(celda => {
            celda.textContent = '₡' + celda.textContent;
        }
        );
    }
    );

};


llenarTabla();