let prompt = require('prompt-sync')()



//
let nome_recebido = prompt("Digite seu nome:")

let idade_recebido = parseInt(prompt("Digite sua idade:"))

let peso_recebido = parseInt(prompt("Digite seu peso:"))//

function olaPessoa(nome_, idade_) {
    


let pessoa = {
    nome: nome_,
    idade: idade_,
}
}

console.log("Ola"+ pessoa.nome +"! Voce esta com " + pessoa.idade + "anos")

olaPessoa("Ingrid",31)
olaPessoa("SImone",50)
olaPessoa("Leonardo",20)
