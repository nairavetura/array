function invertirNumero(numero) {
    var numInvertido = parseInt(numero.toString().split('').reverse().join(''));
    return numInvertido;
}

var n = 2345
var resultado = invertirNumero(n);
console.log("El numero invertido es: ", resultado)