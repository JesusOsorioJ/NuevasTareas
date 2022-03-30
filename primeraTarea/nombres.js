const fs = require("fs");
const { faker } = require("@faker-js/faker");

/**
 * Funcion que retorna una lista de nombres aleatorios
 * @param {number} numero Numero de nombres
 * @returns Lista de nombres aleatorios
 */
function numero(numero) {
  const arre = [];
  for (let i = 0; i < numero; i++) {
    let randomName = faker.name.findName();
    arre.push(randomName);
  }
  return arre.join("\n");
}

fs.writeFile("nombres.txt", numero(1000), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully\n");
  }
});
