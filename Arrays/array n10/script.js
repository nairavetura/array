function capitalizarPrimeraLetra(cadena) {

    var palabras = cadena.split(" ");

    for (var i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
  
    return palabras.join(" ");
  }
  
  var x = "prince of persia";
  console.log(capitalizarPrimeraLetra(x));
  