// Cria uma aplicação que recebe duas variáveis do tipo inteiro,
// exibe os valores digitados e posteriormente exibe a
// primeira variável acrescida de uma unidade e a segunda variável
// decrescida de uma unidade.

// Pede ao usuário o primeiro número e o converte para um inteiro.
let numero1 = parseInt(prompt('Digite o primeiro número:'))

// Pede ao usuário o segundo número e o converte para um inteiro.
let numero2 = parseInt(prompt('Digite o segundo número:'))

// Escreve o resultado no elemento HTML com o ID 'resultado'.
document.getElementById('resultado').innerHTML = `
    <p>
        Os números digitados foram: ${numero1} e ${numero2}. <br/>
        O primeiro número acrescido de uma unidade é ${numero1 + 1}. <br/>
        O segundo número decrescido de uma unidade é ${numero2 - 1}.
    </p>
`