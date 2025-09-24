// Crie um array com 4 frutas e faça com que o programa peça ao usuario um numero que irá revelar a fruta correspondente.

document.getElementById('revelarBtn').addEventListener('click', function() {
    // Array com as frutas
    const frutas = ["Maçã", "Banana", "Laranja", "Morango"];

    // Pega o valor do input e o converte para um número
    const numeroInput = document.getElementById('frutaInput').value;
    const numero = parseInt(numeroInput);

    const resultadoDiv = document.getElementById('resultado');

    // Remove a classe de visibilidade e o conteúdo anterior
    resultadoDiv.classList.remove('visible');
    resultadoDiv.innerHTML = '';
    
    // Pequeno atraso para a animação
    setTimeout(() => {
        let mensagem = "";
        let ehValido = false;

        // Verifica se o número é válido (entre 1 e 4)
        if (isNaN(numero) || numero < 1 || numero > 4) {
            mensagem = "Por favor, digite um número de 1 a 4.";
            resultadoDiv.classList.add('error-message');
        } else {
            // Acessa o array usando o número (ajustando o índice)
            const frutaCorrespondente = frutas[numero - 1];
            mensagem = `A fruta correspondente é: ${frutaCorrespondente}`;
            resultadoDiv.classList.remove('error-message');
            ehValido = true;
        }

        // Adiciona o novo conteúdo e a classe de visibilidade
        resultadoDiv.textContent = mensagem;
        if (ehValido) {
            resultadoDiv.classList.add('visible');
        } else {
            // Se o número for inválido, a mensagem de erro aparece sem animação
            resultadoDiv.classList.add('visible');
        }
    }, 200); // 200ms de atraso
});