// O limite de velocidade será lido do campo inVelPermitida

function verificarSituacao(evento) {
    // 1. Evita que a página recarregue ao enviar o formulário
    evento.preventDefault(); 

    // 2. Pega os valores dos campos de input
    // As variáveis são declaradas aqui: limitePermitido e velocidadeCondutor
    const limitePermitido = Number(document.getElementById('inVelPermitida').value);
    const velocidadeCondutor = Number(document.getElementById('inVelCondutor').value);
    
    // 3. Pega o elemento h3 para exibir o resultado
    const h3Resultado = document.querySelector('h3'); 

    // 4. Validação básica
    if (isNaN(limitePermitido) || isNaN(velocidadeCondutor) || limitePermitido <= 0 || velocidadeCondutor <= 0) {
        h3Resultado.textContent = 'Erro: Digite velocidades válidas e maiores que zero.';
        h3Resultado.style.color = 'orange';
        return;
    }

    // 5. Lógica de verificação
    let mensagem = '';
    
    // A variável limitePermitido é usada aqui, sem o erro de digitação
    if (velocidadeCondutor > limitePermitido) { 
        // Situação de multa
        mensagem = `SITUAÇÃO: Multado! Velocidade de ${velocidadeCondutor} km/h é acima do limite de ${limitePermitido} km/h.`;
        h3Resultado.style.color = 'red';
    } else {
        // Situação dentro da lei
        mensagem = `SITUAÇÃO: Dentro da lei. Velocidade de ${velocidadeCondutor} km/h está no limite ou abaixo de ${limitePermitido} km/h.`;
        h3Resultado.style.color = 'green';
    }

    // 6. Exibe o resultado na tag h3
    h3Resultado.textContent = mensagem;
}

// Associa a função ao evento de 'submit' do formulário
const formulario = document.querySelector('form');

// Isso garante que a função 'verificarSituacao' será chamada 
// quando o usuário clicar no botão de submit.
formulario.addEventListener('submit', verificarSituacao);