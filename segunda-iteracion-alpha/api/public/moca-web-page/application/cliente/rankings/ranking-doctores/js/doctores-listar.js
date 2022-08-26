const cuerpoTabla = document.querySelector('#tbl-observaciones tbody');
let almcedula='';
let almranking=0;
const llenarTabla = () => {
    cuerpoTabla.innerHTML = ''; //Limpia el contenido que tiene el cuerpo de la tabla

    rankings.forEach((rankingTemp,index,original) => {

        let fila = cuerpoTabla.insertRow(); //Crea una fila dentro de la tabla y se almacena en una variable

                fila.insertCell().textContent = rankingTemp.ranking;
                fila.insertCell().textContent = rankingTemp.cedula;
                fila.insertCell().textContent = rankingTemp.nombre;

        
    });
}


llenarTabla();