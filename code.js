


//evento para resolver sudoku.
botonResolver.onclick = () => {
    const solucionSudoku = sudokuResuelto();

    if (solucionSudoku == null){
        numeroErroneo.innerHTML = "No se puede solucionar, intente nuevamente";
        document.body.append(numeroErroneo);
    }else{
        numeroErroneo.innerHTML = "";
        for (let i = 0; i != 4; i++) {
            for (let j = 0; j != 4; j++) {

                obtenerFilasDeInputs()[i][j].value = solucionSudoku[i][j]
            }

        }
    }


}


// evento para generar un sudoku aleatorio.
botonGenerar.onclick = () => {
    solucionCorrecta.innerHTML = "";
    numeroErroneo.innerHTML = "";
    insertarMatrizAleatoria()
    divBotones.append(botonVerificar)
}

//evento para verificar la solución.
botonVerificar.onclick = () => {
    const matrizInputs = new Sudoku4x4(obtenerMatrizInputs())
    solucionCorrecta.innerHTML = "";
    numeroErroneo.innerHTML = "";
    if (matrizInputs.resolver() != null && compararMatrices(matrizInputs.resolver(), obtenerMatrizInputs())) {
        
        solucionCorrecta.innerHTML = "La solución es correcta felicitaciones!!";
        document.body.append(solucionCorrecta);
        botonVerificar.remove()
        
    }else{
        
        numeroErroneo.innerHTML = "La solución no es correcta, intentalo de nuevo";
        document.body.append(numeroErroneo);
    }
    
}



insertarMatrizAleatoria()















