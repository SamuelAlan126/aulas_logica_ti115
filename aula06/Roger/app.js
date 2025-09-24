// Escreva um programa que peça  ao usuario informar o primeiro nome, sobrenome, data de nascimento em um prompt. armazene cada informação em uma variavel diferente, calcule a idade do usuario e retorne todas as informações solicitadas e se o usuario é maior ou menor de idade

document.getElementById('iniciarBtn').addEventListener('click', function() {
    // 1. Solicita as informações ao usuário
    const primeiroNome = prompt("Por favor, informe seu primeiro nome:");
    const sobrenome = prompt("Agora, informe seu sobrenome:");
    const dataNascimentoStr = prompt("Por fim, informe sua data de nascimento (DD/MM/AAAA):");

    // Verifica se alguma entrada foi cancelada
    if (!primeiroNome || !sobrenome || !dataNascimentoStr) {
        alert("Operação cancelada. Por favor, preencha todas as informações.");
        return;
    }

    // 2. Armazena as informações
    const nomeCompleto = primeiroNome + " " + sobrenome;
    
    // 3. Processa a data de nascimento e calcula a idade
    const partesData = dataNascimentoStr.split('/');
    const dia = parseInt(partesData[0]);
    const mes = parseInt(partesData[1]);
    const ano = parseInt(partesData[2]);
    
    // Cria um objeto Date com a data de nascimento
    const dataNascimento = new Date(ano, mes - 1, dia); // Mês é 0-indexado
    
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    // Ajusta a idade se o aniversário ainda não ocorreu este ano
    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
        idade--;
    }

    // 4. Verifica se o usuário é maior ou menor de idade
    const maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade";
    const classeMajoridade = idade >= 18 ? "maior" : "menor";

    // 5. Exibe todas as informações no HTML
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Nome Completo:</strong> ${nomeCompleto}</p>
        <p><strong>Data de Nascimento:</strong> ${dataNascimentoStr}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p class="majoridade ${classeMajoridade}">${maioridade}</p>
    `;

    // Adiciona a classe para exibir o resultado com animação
    resultadoDiv.classList.add('show');
});