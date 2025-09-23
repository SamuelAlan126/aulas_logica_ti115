// Exercício 11:
// Crie um programa que receba dois números decimais,
// calcule a área de um retângulo e exiba o resultado.
// SAÍDA:
// A área do retângulo com base ... e altura ... é ...

let base = parseFloat(prompt("Digite o valor da base:"));
let altura = parseFloat(prompt("Digite o valor da altura:"));

let area = base * altura;

document.getElementById('resultado').innerHTML = `
<p>
    A área do retângulo com base ${base} e altura ${altura} é ${area}.
</p>
`