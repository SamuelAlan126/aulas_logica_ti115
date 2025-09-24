// Escreva um programa que solicite ao usuario um numero qualquer. O programa deve apresentar a contagem regressiva desde numero até zero. Se o numero digitado for igual a zero ou menor, deve exibir um alert para digitar um numero positivo.

document.getElementById('iniciarBtn').addEventListener('click', function() {
    // Pega o valor do input e converte para um número inteiro
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultadoDiv = document.getElementById('resultado');

    // Limpa o resultado anterior
    resultadoDiv.textContent = '';

    // Verifica se o número é válido
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número positivo.");
    } else {
        // Inicia a contagem regressiva
        for (let i = numero; i >= 0; i--) {
            // Cria um novo parágrafo para cada número da contagem
            const p = document.createElement('p');
            p.textContent = i;
            resultadoDiv.appendChild(p);
        }
    }
});