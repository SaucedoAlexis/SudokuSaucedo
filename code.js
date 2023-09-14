function verificarFila(fila) {//Verifica si la fila que se va a ingresar como parte del sudoku sea correcta
    let filaCorrecta = true;
    for (const elemento of fila) {
        if (elemento < 0 || elemento > 4 || isNaN(elemento)) {
            filaCorrecta = false;
            break;
        }
    }
    return filaCorrecta
}

const fila1 = document.getElementsByClassName('fila1')
const fila2 = document.getElementsByClassName('fila2')
const fila3 = document.getElementsByClassName('fila3')
const fila4 = document.getElementsByClassName('fila4')

const filas = [fila1, fila2, fila3, fila4]

const matriz = [];




for (const fila of filas) {

    let list = [];

    for (let i = 0; i != 4; i++) {



        list.push(parseInt(fila[i].innerHTML));



    }
    matriz.push(list)
}

const nuevoSudoku = new Sudoku4x4(matriz)

const sudokuResuelto = nuevoSudoku.resolver()

const botonResolver = document.getElementById('resolver')

botonResolver.onclick = () => {
    for (let i = 0; i!=4; i++) {
        for (let j = 0; j != 4; j++) {
            
            filas[i][j].innerHTML = sudokuResuelto[i][j]
        }
        
    }
}















