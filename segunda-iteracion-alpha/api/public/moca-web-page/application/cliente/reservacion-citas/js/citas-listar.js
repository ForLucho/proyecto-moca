const cuerpoTabla = document.querySelector('#tbl-usuarios tbody');
const selectMascota = document.querySelector('#txtmascota');

const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    usuarios.forEach(usuarioTemp => {
        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = usuarioTemp.cedula;
        fila.insertCell().textContent = usuarioTemp.mascota;
        fila.insertCell().textContent = usuarioTemp.fecha;
        fila.insertCell().textContent = usuarioTemp.motivo;
        fila.insertCell().textContent = usuarioTemp.hora;
        fila.insertCell().textContent = usuarioTemp.observaciones;

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
                confirmButtonText: '¡Sí, eliminar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Cita eliminada!',
                        'La cita fue borrada',
                        'success'
                    )
                }
            })
        });

    });
};


llenarTabla();

const llenarSeccion = () => {
    selectMascota.innerHTML = ''; 

    let opcion = document.createElement('option');
    opcion.value = '';
    opcion.textContent = '-- Seleccione una mascota --';
    selectMascota.appendChild(opcion);
    //Para cada usuario que se encuentre dentro de la colección de usuarios
    mascota.forEach(mascotaTemp => {
        let opcion = document.createElement('option');
        opcion.value = mascotaTemp.nombre;
        opcion.textContent = mascotaTemp.nombre;
        selectMascota.appendChild(opcion);
    }
    );
}

llenarSeccion();