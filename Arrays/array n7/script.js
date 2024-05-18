var myColor = ["Red", "Green", "White", "Black"];

function unirElementos(arr) {
    return arr.map(color => `"${color}"`).join(", ");
  }
  
  console.log(unirElementos(myColor));
  