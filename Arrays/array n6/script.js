function imprimirValoresRepetidos(array) {
    let contador = {};
  
    array.forEach(function(elemento) {
        if (contador[elemento]) {
            contador[elemento]++;
        } else {
            contador[elemento] = 1;
        }
    });
    
    let valoresRepetidos = [];
    for (let elemento in contador) {
        if (contador[elemento] > 1) {
            valoresRepetidos.push(elemento);
        }
    }
 
    console.log(valoresRepetidos.join(","));
}

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
imprimirValoresRepetidos(array);
