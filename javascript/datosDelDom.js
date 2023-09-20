

function obtenerFilasDeInputs() { //devuelve un array con los elementos de los inputs [input.tabla__input.fila1, input.tabla__input.fila1,input.tabla__input.fila1,input.tabla__input.fila1]
    let listaInputs = []
    for (let i = 1; i != 5; i++) {
        let fila = document.getElementsByClassName(`fila${i}`)

        listaInputs.push(fila)
    }
    return listaInputs
}



function obtenerMatrizInputs() { //devuelte una matriz de los inputs [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]]
    matriz = []

    for (let i = 1; i != 5; i++) {

        const fila = document.getElementsByClassName(`fila${i}`)

        const array = obtenerArrayInputs(fila)

        matriz.push(array)

    }



    return matriz
}



function obtenerArrayInputs(fila) { // devuelve un array de los valores actuales de los inputs de la tabla [0,1,2,3]
    let array = []
    for (let i = 0; i != 4; i++) {
        array.push(parseInt(fila[i].value))

    }
    return array
}

function sudokuResuelto(){//devuelve la solución del sudoku si es posible o un null
    const sudoku = new Sudoku4x4(obtenerMatrizInputs());

    return sudoku.resolver();
}
