function calcularTempo(evento) {
    // 1. Evita que a página recarregue ao enviar o formulário
    evento.preventDefault(); 

    // 2. Pega o valor do campo de input
    // Usamos parseFloat para garantir que o número tenha casas decimais
    const valorDeposito = parseFloat(document.getElementById('inValor').value);
    
    // 3. Pega os elementos h3 para exibir os resultados
    const outTempo = document.getElementById('outTempo');
    const outTroco = document.getElementById('outTroco'); 

    // 4. Limpa as mensagens de erro/sucesso anteriores
    outTempo.textContent = '';
    outTroco.textContent = '';
    outTempo.style.color = 'black';
    outTroco.style.color = 'black';

    // 5. Validação de dados de entrada
    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        outTempo.textContent = 'Erro: Por favor, insira um valor de depósito válido.';
        outTempo.style.color = 'red';
        return;
    }

    // 6. Variáveis para armazenar o resultado
    let tempo = 0;
    let troco = 0;
    
    // 7. Lógica do Parquímetro
    if (valorDeposito < 1.00) {
        // Depósito insuficiente para o tempo mínimo
        outTempo.textContent = 'Valor Insuficiente! Deposite no mínimo R$ 1,00 para 30 minutos.';
        outTempo.style.color = 'red';
        troco = valorDeposito;
        
    } else if (valorDeposito < 1.75) {
        // Compra de 30 minutos
        tempo = 30;
        troco = valorDeposito - 1.00;
        
    } else if (valorDeposito < 3.00) {
        // Compra de 60 minutos
        tempo = 60;
        troco = valorDeposito - 1.75;
        
    } else {
        // Compra de 120 minutos (Tempo máximo)
        tempo = 120;
        troco = valorDeposito - 3.00;
    }

    // 8. Exibe o resultado final
    if (tempo > 0) {
        outTempo.textContent = `Tempo de Serviço: ${tempo} minuto(s)`;
    }
    
    // O toFixed(2) é usado para formatar o troco com 2 casas decimais (padrão monetário)
    outTroco.textContent = `Troco: R$ ${troco.toFixed(2).replace('.', ',')}`;
}

// 9. Associa a função ao evento de 'submit' do formulário
const formulario = document.querySelector('form');
formulario.addEventListener('submit', calcularTempo);