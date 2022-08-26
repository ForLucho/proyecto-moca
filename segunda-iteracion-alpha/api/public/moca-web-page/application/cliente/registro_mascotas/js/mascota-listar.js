const seccionMascota = document.querySelector('#pets-tabla');

const llenarSeccion = () => {
    seccionMascota.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    mascota.forEach(mascotaTemp => {

        let div = document.createElement('div');
        div.addEventListener('click', () => {
            document.getElementById('nombre').innerHTML = mascotaTemp.nombre;
            document.getElementById('estado').innerHTML = mascotaTemp.estado;
            document.getElementById('direccion').innerHTML = mascotaTemp.direccion;
            document.getElementById('dueño').innerHTML = mascotaTemp.dueño;
            document.getElementById('telefono').innerHTML = mascotaTemp.telefono;
        });

        indi = mascota.indexOf(mascotaTemp)
        div.classList.add('galeria');
        let divFoto = document.createElement('div');
        divFoto.classList.add('foto');
        let img = document.createElement('img');
        img.src = 'img/pets.png';
        img.alt = 'Imagen de una mascota registrada.';
        divFoto.appendChild(img);
        let divPie = document.createElement('div');
        divPie.classList.add('pie');
        let p = document.createElement('p');
        p.textContent = mascotaTemp.nombre;
        divPie.appendChild(p);
        div.appendChild(divFoto);
        div.appendChild(divPie);
        seccionMascota.appendChild(div);
        
    });
}

llenarSeccion();

const cargarInformacion = () => {
    document.getElementById('nombre').innerHTML = mascota[0].nombre;
    document.getElementById('estado').innerHTML = mascota[0].estado;
    document.getElementById('direccion').innerHTML = mascota[0].direccion;
    document.getElementById('dueño').innerHTML = mascota[0].dueño;
    document.getElementById('telefono').innerHTML = mascota[0].telefono;
}

cargarInformacion();