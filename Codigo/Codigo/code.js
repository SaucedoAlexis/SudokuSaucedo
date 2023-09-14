const matriz = [[0,0,0,3],
                [0,4,0,0],
                [0,0,3,2],
                [0,0,0,0]]

// const matriz = [[1,1,1,1],
//                 [1,1,4,1],
//                 [1,3,1,1],
//                 [1,1,1,1]]

class Sudoku4x4{
    constructor(matriz){
        this.matriz = matriz;
    }

    mostrarFila(fila){
        return this.matriz[fila];
    }

    mostrarColumna(columna){
        return this.matriz.map(row => row[columna]);
    }

    mostrarCuadrante(columna, fila){
        let filas = this.definirFilas(fila);
        let filasReducidas = columna <= 1 ? filas.map( fila => fila.slice(0,2)) : filas.map( fila => fila.slice(2,4))
        let cuadrante =[]
        for (let i = 0; i < filasReducidas.length; i++) {
            cuadrante.push(filasReducidas[i][0])
            cuadrante.push(filasReducidas[i][1])
            
        }
        return cuadrante
        
    }

    definirFilas(fila){
        
        return fila <= 1 ? this.matriz.slice(0,2) : this.matriz.slice(2,4);
    }

    quedanCeros(matriz= this.matriz){
        return matriz.map( fila => fila.includes(0)).includes(true) ? true : false
    }

    resolver(matriz = this.matriz){
        let vueltas = 0;
        while (this.quedanCeros(this.matriz)){
            vueltas += 1;
            if (vueltas > 10){
                alert("Este Sudoku no se puede resolver");
                break;
            }
            for (let fila = 0; fila < 4; fila++) {
                
                for (let columna = 0; columna < 4; columna++) {
                    if (this.matriz[fila][columna] == 0){

                        let numsPosibles = [];
                        let ponerNum = [1,2,3,4];
                        
                        const filtroNumeros = [this.mostrarFila(fila),this.mostrarColumna(columna),this.mostrarCuadrante(columna,fila)]
                        filtroNumeros.map( lista => lista.forEach( num => {
                            num != 0 & !numsPosibles.includes(num) ? numsPosibles.push(num) : true
                        }))
                        

                        ponerNum = ponerNum.filter( elemento => !numsPosibles.includes(elemento))


                        if (ponerNum.length == 1){
                            this.matriz[fila][columna] = ponerNum[0]
                        }
                        
                    }
                    
                }
                
            }
        }
        return matriz
    }
}

const nuevoSudoku = new Sudoku4x4(matriz)



console.log(nuevoSudoku.resolver(matriz))

console.log(nuevoSudoku.quedanCeros())