let nome = "Enzo";
let idade = 27;

let pessoa = { nome: nome, idade: idade };
console.log(pessoa);
console.log(pessoa.nome);

let pessoa1 = { nome: "Lucas", idade: 25 };
console.log(pessoa1.idade);

const funcionario = {
  nome: "André",
  cargo: "Analista de TI",
  idade: 28,
};

// Usa .(pontos) para obter valores em um objeto
console.log(
  funcionario.nome +
    " é " +
    funcionario.cargo +
    " e tem " +
    funcionario.idade +
    " anos"
);

// Objetos podem armazenar funções ou métodos

let usuario = {
  nome: "Max",
  idade: 37,

  // não se usa function aqui
  imprimirDados(nomeUsuario, idadeUsuario) {
    return "Me chamo " + this.nome + " e tenho " + this.idade + " anos";
    // Lembre de usar o this nessa parada para ser referir aos atributos do objeto
  },
};

let dadosUsuario = usuario.imprimirDados(usuario.nome, usuario.idade);
console.log(dadosUsuario);
