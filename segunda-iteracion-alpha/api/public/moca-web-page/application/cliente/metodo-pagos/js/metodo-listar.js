const seccionTarjeta = document.querySelector('#credit-tabla');


const llenarSeccion = () => {
    seccionTarjeta.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    //Para cada usuario que se encuentre dentro de la colección de usuarios
    metodos.forEach(usuarioTemp => {

        let div = document.createElement('div');
        div.classList.add('credit-card');
        let divLast4 = document.createElement('div');
        divLast4.classList.add('credit-card-last4');
        divLast4.textContent = usuarioTemp.numerotarjeta;
        let divName = document.createElement('div');
        divName.classList.add('credit-card-name');
        divName.textContent = usuarioTemp.nombre;
        let divExpiry = document.createElement('div');
        divExpiry.classList.add('credit-card-expiry');
        divExpiry.textContent = usuarioTemp.fecha;
        div.appendChild(divLast4);
        div.appendChild(divName);
        div.appendChild(divExpiry);
        seccionTarjeta.appendChild(div);
    });
}

llenarSeccion();