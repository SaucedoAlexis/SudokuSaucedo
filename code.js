if (localStorage.getItem('ultimoIngreso') == null){
    localStorage.setItem('ultimoIngreso',Date());
}else{
    const ultimoIngreso = localStorage.getItem('ultimoIngreso')
    console.log(ultimoIngreso)
    const horarioActual = new Date();
    
    localStorage.setItem('ultimoIngreso',horarioActual);
}


//evento para resolver sudoku.
botonResolver.onclick = () => {
    const solucionSudoku = sudokuResuelto();
    switch (solucionSudoku) {
        case null:
            numeroErroneo.innerHTML = "No se puede solucionar, intente nuevamente";
            document.body.append(numeroErroneo);
            break;
        case 'invalida':
            numeroErroneo.innerHTML = "Hay números inválidos, letras o espacios vacíos, solo se aceptan números del 0 al 4";
            document.body.append(numeroErroneo);
            break;

        default:
            numeroErroneo.innerHTML = "";
            for (let i = 0; i != 4; i++) {
                for (let j = 0; j != 4; j++) {

                    obtenerFilasDeInputs()[i][j].value = solucionSudoku[i][j]
                }

            }
            break;
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

    } else {

        numeroErroneo.innerHTML = "La solución no es correcta, intentalo de nuevo";
        document.body.append(numeroErroneo);
    }

}



insertarMatrizAleatoria()















