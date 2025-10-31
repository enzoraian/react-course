// Destructuring de Arrays

const dadosNomeDoUsuario = ["Enzo", "Raian"];
const primeiroNome = dadosNomeDoUsuario[0]; // "Enzo"
const ultimoNome = dadosNomeDoUsuario[1]; // "Raian"

// Esse código acima pode ser encurtado
// os nomes das variaveis definidas dentro do primeiro colchete [] podem ser qualquer um que você definir
const [primeiroNome1, ultimoNome1] = ["Enzo", "Raian"];
console.log(primeiroNome1);
console.log(ultimoNome1);

// Destructuring de Objetos
const usuario = {
  nome: "Lucas",
  idade: 28,
};

const nome = usuario.nome; // "Lucas"
const idade = usuario.idade; // 28

// Esse código acima pode ser encurtado

// os nomes das variaveis definidas dentro da primeira chave {} devem ser iguais aos definidos na segunda {}
const { nome1, idade1 } = { nome1: "Lucas", idade1: 28 };

console.log(nome1);
console.log(idade1);

// Destructuring de Funções
