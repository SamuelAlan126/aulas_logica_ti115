//Enuciado: crie uma função chamada saudação que recebe um parametro e retorna uma mensagem de boas vindas no formato:"Olá, nome! Seja bem vindo(a)!". Depois, teste a função chamando com o seu proprio nome. 

function saudacao(nome) {
    return console.log("Olá," + nome + "! Seja bem vindo(a)!");
}

const usuario = prompt("Digite seu nome: ");
saudacao(usuario);
saudacao("Davi Brito");