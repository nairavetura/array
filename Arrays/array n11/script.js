function mostrarPalabraMasLarga(frase) {

    var palabras = frase.split(' ');
    
    var palabraMasLarga = "";

    for (var i = 0; i < palabras.length; i++) {

      if (palabras[i].length > palabraMasLarga.length) {

        palabraMasLarga = palabras[i];
      }
    }

    return palabraMasLarga;
  }
  
  var x = "Rutina de skincare";
  var resultado = mostrarPalabraMasLarga(x);
  console.log(resultado); 
  