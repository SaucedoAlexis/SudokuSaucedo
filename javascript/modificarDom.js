//secciones selecciondas para ingresarle nodos
const articuloInfoUsuario = document.getElementById('infoUsuario');


//insertar una Matriz en el DOM
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

//funcion para insertar una Matriz en el dom
function insertarMatriz(matriz) {
    
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

//Función para insertar la última fecha en la que se accedió a la página
function agregarFechaDom(){
    const elementoFecha = document.createElement("p");

    const infoUsuario = JSON.parse(localStorage.getItem('usuario'));

    elementoFecha.innerText = `Su último ingreso fue el: ${infoUsuario.ultimoIngreso}`;

    

    articuloInfoUsuario.append(elementoFecha)
}

//Función para insertar la cantidad de sudokus verificados por el usuario

function agregarSudokusVerificados(){
    const elementoSudokusVerificados = document.createElement("p");

    const infoUsuario = JSON.parse(localStorage.getItem('usuario'));

    elementoSudokusVerificados.innerText = `Usted lleva ${infoUsuario.sudokusResueltos} sudokus verificados`;

    

    articuloInfoUsuario.append(elementoSudokusVerificados)
}

//Función para sumar +1 a sudokusVerificados del localStorage

function sumarVerificacionUsuario(){
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    usuario.sudokusResueltos += 1

    localStorage.usuario = JSON.stringify(usuario)
}







