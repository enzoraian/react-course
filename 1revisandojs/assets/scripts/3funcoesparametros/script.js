// 3) Funções e Parâmetros
function criarSaudacao() {
  return "Olá";
}

let criarSaudacao1 = function () {
  return "Olá";
};

let criarSaudacao2 = () => {
  return "Olá";
};

let criarSaudacao3 = () => "Olá";

console.log(criarSaudacao());
console.log(criarSaudacao1());
console.log(criarSaudacao2());
console.log(criarSaudacao3());

// esses parâmetros recebidos ficam disponíveis apenas dentro da função
// funções podem ser reutilizadas com valores de entrada diferentes
let criarSaudacao4 = (mensagem, nome) => mensagem + " " + nome;
console.log(criarSaudacao4("Opa", "Enzo"));

// é possível inserir valores iniciais padrões aos parâmetros
// tem q ser o segundo parâmetro
let criarSaudacao5 = (nome, mensagem = "Olá") => mensagem + " " + nome;
console.log(criarSaudacao5("Lucas"));
console.log(criarSaudacao5("Lucas", "Sobrescrevendo"));

function criarOutraSaudacao(nome, sobrenome) {
  return "Olá " + nome + " " + sobrenome;
}

console.log(criarOutraSaudacao("Enzo", "Raian"));

// armazenando resultado de uma função em uma variável
let suaSaudacao = criarOutraSaudacao("Daniel", "San");
console.log(suaSaudacao);

// Nomeie suas variáveis com um nome sobre o que elas realmente representam
// Nomeie suas funções com um nome sobre o que realmente elas fazem
