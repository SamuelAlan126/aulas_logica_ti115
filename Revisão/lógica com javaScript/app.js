// Crie uma aplicação que receba duas variáveis do tipo inteiro,
// exiba os valores digitados e posteriormente exiba a
// primeira variável acrescida de uma unidade e a segunda variável
// decrescida de uma unidade.

let numero1 = parseInt(prompt('Digite o primeiro número:'))
let numero2 = parseInt(prompt('Digite o segundo número:'))

document.getElementById('resultado').innerHTML = `
<p>
    Os números digitados foram: ${numero1} e ${numero2}. <br/>
    O primeiro número acrescido de uma unidade é ${numero1 + 1}.
    O segundo número decrescido de uma unidade é ${numero2 - 1}.
</p>
`