const selectMedico = document.querySelector('#txtmedico');

const llenarSeccion = () => {
    selectMedico.innerHTML = ''; 

    let opcion = document.createElement('option');
    opcion.value = '';
    opcion.textContent = '-- Seleccione un médico --';
    selectMedico.appendChild(opcion);
    //Para cada usuario que se encuentre dentro de la colección de usuarios
    medicos.forEach(medicoTemp => {
        let opcion = document.createElement('option');
        opcion.value = medicoTemp.cedula;
        opcion.textContent = medicoTemp.nombre + ' ' + medicoTemp.apellido;
        selectMedico.appendChild(opcion);
    }
    );
}

llenarSeccion();

