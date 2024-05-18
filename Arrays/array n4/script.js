function arrayMasAlto(array) {
    array.sort(function(f, g) {
       return g - f;
    });
    console.log("El numero mas alto es: ", array[0])
}

var num = [3, 7, 8, 2];
arrayMasAlto(num);
