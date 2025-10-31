class User {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  imprimirDados(nomeUsuario, idadeUsuario) {
    return "Me chamo " + this.nome + " e tenho " + this.idade + " anos";
  }
}

let user = new User("Marcos", 21);
let dadosUsuario = user.imprimirDados(user.nome, user.idade);

console.log(dadosUsuario);
