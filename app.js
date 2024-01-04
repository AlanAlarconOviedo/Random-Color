
const button = document.getElementById("btn-color")
const title = document.getElementById("color")


function generateColorHexRandom() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for (let i = 0; i<6; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      colorHex += digitos[randomIndex];

    }
    return colorHex;
}


button.addEventListener ("click", function() {
  let randomColor =  generateColorHexRandom();
  title.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
} );