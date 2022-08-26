const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
let reservaciones = [];

const llenarReservaciones = async() => {
    reservaciones = await getDatos('hotel')
    llenarTabla();
};

const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    reservaciones.forEach(reservacionTemp => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = reservacionTemp.codigo;
        fila.insertCell().textContent = reservacionTemp.mascota;
        fila.insertCell().textContent = reservacionTemp.fechaentrada;
        fila.insertCell().textContent = reservacionTemp.fechasalida;
        fila.insertCell().textContent = reservacionTemp.habitacion;
        fila.insertCell().textContent = reservacionTemp.nombre;

        //Creación de la celda para los botones
        let tdAcciones = fila.insertCell();

        //Creación del botón de editar
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        //Creación del botón de eliminar
        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el botón de editar y eliminar a la celda de acciones
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la información?',
                text: "La acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos('/eliminar-mascota', reservacionTemp._id);
                }
            })
        });

    });
};


llenarReservaciones();