//llenar los campos con id con los datos del usuario almacenados en el StorageSession
const llenarCampos = () => {
    let sesion = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(sesion);
    //llenar el campo con el id nombre-apellido con los datos nombre y apellido unidos
    document.getElementById('nombre-apellido').innerHTML = sesion.nombre + ' ' + sesion.apellido;
    document.getElementById('tipousuario').innerHTML = sesion.tipousuario;
    document.getElementById('cedula').innerHTML = sesion.cedula;
    document.getElementById('provincia').innerHTML = sesion.provincia;
    document.getElementById('canton').innerHTML = '-';
    document.getElementById('distrito').innerHTML = '-';
    document.getElementById('correo').innerHTML = sesion.correo;
    document.getElementById('telefono').innerHTML = sesion.numero;
    
};

llenarCampos();