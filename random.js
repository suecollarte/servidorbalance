const listaOcurrencias = {};


function generarAletario(numInicial, numFinal) {
    let semilla = Math.random();
    let numAleatorio = parseInt(semilla * numFinal) + numInicial;
    // console.log(semilla, numAleatorio) //Para comprender el uso del random
    return numAleatorio;
}

export function conteoAleatorios(numInicial, numFinal, cantidad) {
    console.log(cantidad);
    let numAleatorio = 0;
    let cant=cantidad;
    if (cantidad >0){ 
        cant=1000;
    }
    else{cant=100000000;
    }
    for (let conteo = 0; conteo < cant; conteo++) {
        numAleatorio = generarAletario(numInicial, numFinal);
        
        if (listaOcurrencias.hasOwnProperty(numAleatorio.toString())) {
            listaOcurrencias[numAleatorio.toString()] += 1;
        } else {
            listaOcurrencias[numAleatorio.toString()] = 1;
        }
    }
    return listaOcurrencias;
}


process.on('message', msg => {
    console.log('mensaje desde el procesos principal:\n');
    console.log(msg);

    const suma = conteoAleatorios(1,1000,1000000);
    process.send(`resultado de suma en segundo plano ${suma}`)
});