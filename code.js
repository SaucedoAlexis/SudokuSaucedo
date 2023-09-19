//clase usuario para almacenar en el localStorage
const usuario = {
    ultimoIngreso: "",
    sudokusResueltos: 0,
    sudokuGuardado: []
}

//acciones a realizar con el localStorage
if (localStorage.getItem('usuario') == null) {
    ultimoIngreso = new Date();
    const fechaFormateada = ultimoIngreso.toLocaleTimeString("es-MX", {
        hour12: false,
        day:"2-digit",
        month:"2-digit",
        year:"2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    usuario.ultimoIngreso = fechaFormateada;
    localStorage.setItem('usuario', JSON.stringify(usuario));
} else {

    let usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));

    const nuevoIngreso = new Date();

    const fechaFormateada = nuevoIngreso.toLocaleTimeString("es-MX", {
        hour12: false,
        day:"2-digit",
        month:"2-digit",
        year:"2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    

    usuarioRegistrado.ultimoIngreso = fechaFormateada;

    localStorage.usuario = JSON.stringify(usuarioRegistrado);

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