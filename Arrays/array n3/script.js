function arrayMasBajo(array) {
     array.sort(function(f, g) {
        return f - g;
     });
     console.log("El numero mas bajo es: ", array[0])
}

var num = [3, 7, 8, 2];
arrayMasBajo(num);
