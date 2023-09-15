


const botonResolver = document.getElementById('resolver')

botonResolver.onclick = () => {
    const matriz = obtenerMatrizInputs(obtenerFilasDeInputs());

    const sudoku = new Sudoku4x4(matriz)

    const sudokuResuelto = sudoku.resolver()
    

    for (let i = 0; i != 4; i++) {
        for (let j = 0; j != 4; j++) {

            obtenerFilasDeInputs()[i][j].value = sudoku.resolver()[i][j]
        }

    }


}

const botonGenerar = document.getElementById('generarSudoku')

botonGenerar.onclick = () => {
    insertarMatrizAleatoria()
}



insertarMatrizAleatoria()















