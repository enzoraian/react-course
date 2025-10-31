// Arrays são considerados tipos especiais de objetos

const hobbies = ["Sports", "Cooking", "Reading", "Study"];
console.log(hobbies[0]);

hobbies.push("Working"); // add no fim
console.log(hobbies);

hobbies.unshift("Driving"); // add no inicio
console.log(hobbies);

hobbies.pop(); // remover do fim
console.log(hobbies);

hobbies.shift(); // remover do inicio
console.log(hobbies);

// recebe uma função como argumento dentro de outra função findIndex()
const indice = hobbies.findIndex((item) => {
  return item === "Reading";
});

console.log(indice);

let valorProcurado = "Study";
const outroIndice = hobbies.findIndex((item) => {
  return item === valorProcurado;
});

console.log(outroIndice);

// Função de forma mais curta
const novoIndice = hobbies.findIndex((item) => item === "Banana");
console.log(novoIndice); // não encontrado
