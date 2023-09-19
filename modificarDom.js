function insertarMatrizAleatoria() {
    //obtener matriz de la lista
    let n = Math.round(Math.random() * 3);
    const matriz = matrices[n];
    //lista de las filas del dom
    const matrizDom = obtenerFilasDeInputs();

    //recorrer matrices e insertar los value de la matriz aleatoria en el dom   
    for (let i = 0; i != 4; i++) {
        for (let j = 0; j != 4; j++) {
            matrizDom[i][j].value = matriz[i][j]
        }

    }
}
//Creando elemento para un error
const numeroErroneo = document.createElement("h2");


//Creando elemento para acierto
const solucionCorrecta = document.createElement("h2");

//Creando elemento para mostrar fecha
const elementoFecha = document.createElement("p");

const infoUsuario = JSON.parse(localStorage.getItem('usuario'));

elementoFecha.innerHTML = `Su último ingreso fue el: ${infoUsuario.ultimoIngreso}`;

const articuloInfoUsuario = document.getElementById('infoUsuario');

articuloInfoUsuario.append(elementoFecha)

//creando elemento para mostrar sudokus resueltos

const elementoFecha = document.createElement("p");

const resueltos = infoUsuario.sudokusResueltos;

resueltos


