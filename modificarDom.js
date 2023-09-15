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

