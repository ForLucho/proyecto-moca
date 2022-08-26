const cuerpoTabla = document.querySelector('#tbl-observaciones tbody');

let pagos = [];

const llenarPagos = async() => {
    pagos = await getDatos('pago')
    llenarTabla();
};


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    pagos.forEach(pagoTemp => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = pagoTemp.fecha;
        fila.insertCell().textContent = pagoTemp.codigo;
        fila.insertCell().textContent = pagoTemp.detalle;
        fila.insertCell().textContent = pagoTemp.metodo;
        fila.insertCell().textContent = pagoTemp.nombre;
        fila.insertCell().textContent = pagoTemp.recaudacion;
    });

};

llenarPagos();