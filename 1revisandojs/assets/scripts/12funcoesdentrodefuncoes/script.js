function encerrarTempo() {
  console.log('Tempo esgotado 2 ...');
}

// setInterval é uma função que recebe outra função dentro dela
setTimeout(encerrarTempo, 2000);

setTimeout(() =>{
    console.log("Tempo esgotado 1 ...")
}, 1000)

function iniciar(){
  const mensagem = "" // da mesma forma essa variavel está disponível apenas dentro da função
  function saudacao(){
    console.log("Olá")
  }

  saudacao()
}

iniciar()
// saudacao() - não pode ser executada fora do escopo