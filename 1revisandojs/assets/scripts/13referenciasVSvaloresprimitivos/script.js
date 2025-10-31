// Ao modificar Strings, Numbers e Booleans sempre será produzido um novo valor

let mensagem = "Olá"
mensagem = "Olá mundo" // cria um novo valor
mensagem = mensagem.concat("!!!") // cria um novo valor
console.log(mensagem)

// Ao modificar Objects e Arrays não será produzido um novo valor, sera editado o valor atual
const hobbies = ["Sports", "Working"]
hobbies.push("Cooking") // edita o array existente, sem criar um novo
console.log(hobbies)

