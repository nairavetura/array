function ordenAlfabetico(cadena) {

    var caracter = cadena.toLowerCase().match(/[a-z]/g);
  
    caracter.sort();
    
    return caracter.join("");
  }

  var x = 'webmaster';
  console.log(ordenAlfabetico(x));
  