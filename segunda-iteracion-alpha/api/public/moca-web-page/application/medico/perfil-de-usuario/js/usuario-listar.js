const cuerpoTabla = document.querySelector('#tabla-con-datos tbody');
const cuerpoTabla2 = document.querySelector('#tabla-con-direcciones tbody');
const datosPersonales = document.querySelector('#tabla-con-direcciones tbody tr td');


const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla
    cuerpoTabla2.innerHTML = '';

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    usuarios.forEach(usuarioTemp => {

        let fila = cuerpoTabla.insertRow() //Crea una fila dentro de la tabla y se almacena en una variable

        fila.insertCell().textContent = usuarioTemp.nombre;
        fila.insertCell().textContent = usuarioTemp.apellido;
        fila.insertCell().textContent = usuarioTemp.telefono;
        fila.insertCell().textContent = usuarioTemp.correo;
        fila.insertCell().textContent = usuarioTemp.cedula;

        let fila2 = cuerpoTabla2.insertRow()

        fila2.insertCell().textContent = usuarioTemp.provincia;
        fila2.insertCell().textContent = usuarioTemp.canton;

        //Creación de la celda para los botones
        let tdAcciones = fila.insertCell();
        let tdAcciones2 = fila2.insertCell();

        //Creación del botón de editar y eliminar para datos personales
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');


        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        //Agregar el botón de editar y eliminar a la celda de acciones de datos personales
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);

        //Creación del botón de editar para datos de direccion 

        let btnEditar2 = document.createElement('button');
        btnEditar2.textContent = 'Editar';
        btnEditar2.type = 'button';
        btnEditar2.classList.add('btn-editar');

        let btnEliminar2 = document.createElement('button');
        btnEliminar2.textContent = 'Eliminar';
        btnEliminar2.type = 'button';
        btnEliminar2.classList.add('btn-eliminar');


        //Agregar el botón de editar y eliminar a la celda de acciones de datos de direccion

        tdAcciones2.appendChild(btnEditar2);
        tdAcciones2.appendChild(btnEliminar2);


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
                    fila.deleteCell(4)
                    fila.deleteCell(3)
                    fila.deleteCell(2)
                    fila.deleteCell(1)
                    fila.deleteCell(0)
                    fila.insertCell(0)
                    fila.insertCell(1)
                    fila.insertCell(2)
                    fila.insertCell(3)
                    fila.insertCell(4)
                    Swal.fire(
                        '¡Proceso realizado con éxito!',
                        'Datos eliminados',
                        'success'
                    )
                }
            })
        });


        btnEliminar2.addEventListener('click', () => {


            Swal.fire({
                title: '¿Está seguro que desea eliminar la información?',
                text: "La acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!'
            }).then((result) => {
                datosPersonales.innerHTML = '';
                if (result.isConfirmed) {
                    fila2.deleteCell(1)
                    fila2.deleteCell(0)
                    fila2.insertCell(0)
                    fila2.insertCell(1)

                    Swal.fire(
                        '¡Proceso realizado con éxito!',
                        'Datos eliminados',
                        'success'
                    )

                }
            })
        });



        btnEditar2.addEventListener('click', () => {

            (async() => {

                const { value: formValues } = await Swal.fire({
                    title: 'Editar Dirección',
                    html: 'Provincia<input id="swal-input1" class="swal2-input">' +
                        'Cantón<input id="swal-input2" class="swal2-input">',
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                        ]
                    }
                }).then((result) => {

                    if (result.isConfirmed) {


                        fila2.deleteCell(1)
                        fila2.deleteCell(0)
                        fila2.insertCell(0).textContent = usuarioTemp.provincia;
                        fila2.insertCell(0).textContent = usuarioTemp.canton;



                        Swal.fire(
                            '¡Información guardada con éxito!',
                            'Datos almacenados',
                            'success'
                        )

                    }
                })

            })()


        })








        btnEditar.addEventListener('click', () => {

            (async() => {

                const { value: formValues } = await Swal.fire({
                    title: 'Editar información',
                    html: 'Nombre<input id="swal-input1" class="swal2-input">' +
                        'Apellido<input id="swal-input2" class="swal2-input">' + 'Teléfono<input id="swal-input3" class="swal2-input">' + 'Correo<input id="swal-input4" class="swal2-input">' + 'Cédula<input id="swal-input5" class="swal2-input">',
                    focusConfirm: false,
                    preConfirm: () => {
                        return [
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value,
                        ]
                    }
                }).then((result) => {

                    if (result.isConfirmed) {


                        fila.deleteCell(4)
                        fila.deleteCell(3)
                        fila.deleteCell(2)
                        fila.deleteCell(1)
                        fila.deleteCell(0)
                        fila.insertCell(0).textContent = usuarioTemp.nombre;
                        fila.insertCell(1).textContent = usuarioTemp.apellido;
                        fila.insertCell(2).textContent = usuarioTemp.telefono;
                        fila.insertCell(3).textContent = usuarioTemp.correo;
                        fila.insertCell(4).textContent = usuarioTemp.cedula;



                        Swal.fire(
                            '¡Información guardada con éxito!',
                            'Datos almacenados',
                            'success'
                        )

                    }
                })

            })()


        })






    });
};


llenarTabla();