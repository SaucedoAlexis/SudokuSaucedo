const matriz1 = [[0,0,0,0],[1,0,3,0],[4,3,1,0],[2,0,0,0]]
const matriz2 = [[0,0,0,2],[2,4,0,3],[0,0,0,0],[0,1,0,0]]
const matriz3 = [[2,1,0,4],[0,3,0,0],[0,0,0,0],[0,0,0,2]]
const matriz4 = [[1,0,3,0],[3,0,2,0],[0,0,4,0],[0,0,0,0]]

const matrices = [matriz1,matriz2,matriz3,matriz4]

const fila1 = document.getElementsByClassName('fila1')

fila1[0].value=5


// function insertarMatriz(){
//     let n = Math.round(Math.random() * 3)
//     const matriz = matrices[n]
//     for (let i = 1; i != 5; i++) {
//         let fila = document.getElementsByClassName(`fila${i}`)
//         fila = obtenerArray(fila)
//         for (let j = 0; j != 4; j++) {
//             fila[j].value=matriz[j]
            
//         }
//     }
// }

// insertarMatriz()
// function verificarFila(fila) {//Verifica si la fila que se va a ingresar como parte del sudoku sea correcta
//     let filaCorrecta = true;
//     for (const elemento of fila) {
//         if (elemento < 0 || elemento > 4 || isNaN(elemento)) {
//             filaCorrecta = false;
//             break;
//         }
//     }
//     return filaCorrecta
// }

function obtenerArray(fila) {
    let array = []
    for (let i = 0; i != 4; i++) {
        array.push(parseInt(fila[i].value))

    }
    return array
}

function obtenerMatriz() {
    matriz = []

    for (let i = 1; i != 5; i++) {

        const fila = document.getElementsByClassName(`fila${i}`)

        const array = obtenerArray(fila)

        matriz.push(array)

    }

    

    return matriz
}








// for (const fila of filas) {

//     let list = [];

//     for (let i = 0; i != 4; i++) {



//         list.push(parseInt(fila[i].innerHTML));



//     }
//     matriz.push(list)
// }
// console.log(matriz)

// const nuevoSudoku = new Sudoku4x4(matriz)

// const sudokuResuelto = nuevoSudoku.resolver()




const botonResolver = document.getElementById('resolver')

botonResolver.onclick = () => {
    const matriz = obtenerMatriz()
    const sudoku = new Sudoku4x4(matriz)
    // for (let i = 0; i!=4; i++) {
    //     for (let j = 0; j != 4; j++) {

    //         filas[i][j].innerHTML = sudoku.resolver[i][j]
    //     }

    // }
}















