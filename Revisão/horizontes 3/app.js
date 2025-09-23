// Crie uma aplicação que receba um número inteiro e
// imprimir seu antecessor e seu sucessor.
// SAÍDA:
// O número digitado foi ..., seu antecessor é ... e seu sucessor é ...

let numero = parseInt(prompt("Digite um número inteiro"));

let antecessor = numero - 1;
let sucessor = numero + 1;

document.getElementById('resultado').innerHTML = `
    O número digitado foi ${numero}, seu antecessor é ${antecessor} e seu sucessor é ${sucessor}.
`;