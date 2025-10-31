// Os métodos de array map, filter e reduce recebem uma função como argumento (() =>)
// Essa função que é recebida possui outros argumentos

// Map
// Usado para criar um novo array a partir de um array existente, aplicando uma mesma função
// a cada um dos elementos do array inicial.

const numeros = [1, 2, 3, 4, 5];

const numerosMultDois = numeros.map(function callback(elemento, indice, array) {
  return elemento * 2;
});

console.log(numerosMultDois);

const numerosMulTres = numeros.map((elemento) => {
  return elemento * 3;
});

console.log(numerosMulTres);

const numerosMultQuatro = numeros.map(function (elemento, indice, array) {
  return elemento * 4;
});

console.log(numerosMultQuatro);

// Filter (sintaxe parecida com o map)
// Recebe cada elemento do array e aplica uma instrução condicional a ele
// Se essa condição for verdadeira, o elemento é colocado no array de resultado
// Se for falsa, o elemento não é colocado lá

const maioresQueDois = numeros.filter(function callback(
  elemento,
  indice,
  array
) {
  return elemento > 2;
});

console.log(maioresQueDois);

const maioresQueTres = numeros.filter(function (elemento) {
  return elemento > 3;
});

console.log(maioresQueTres);

const maioresQueQuatro = numeros.filter((elemento) => {
  return elemento > 4;
});
console.log(maioresQueQuatro);

// Reduce
// Reduz um array de valores a um único valor.
// Para obter o valor de resultado, ele executa uma função de redução em cada elemento do array.

// Acumulador é o valor que vai sendo “guardado” e atualizado a cada iteração do reduce().
// Ele é como uma “mochila” onde o reduce() vai armazenando o resultado parcial até chegar ao resultado final.
const somaArray = numeros.reduce(function callback(
  acumulador,
  elemento,
  indice,
  array
) {
  console.log(acumulador + "// acumulador");
  return acumulador + elemento;
},
0); // definido acumulador inicialmente como zero

console.log(somaArray);

const multiplicaArray = numeros.reduce(function (
  acumulador,
  elemento,
  indice,
  array
) {
  console.log(acumulador + "// acumulador");
  return acumulador * elemento;
});

console.log(multiplicaArray);

const divideArray = numeros.reduce(function (acumulador, elemento) {
  return acumulador / elemento;
}, 10000); // valor inicial definido sai dividindo pelos elementos do array

console.log(divideArray);
