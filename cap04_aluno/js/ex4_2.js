/* Conteúdo do arquivo: ex4_2.js */

// 1. Cria uma função para ser chamada quando o botão de submit for clicado.
function receberDadosEResponder(evento) {
    // Previne que o formulário recarregue a página, o comportamento padrão do submit.
    evento.preventDefault(); 
    
    // --- 2. Obter os dados do formulário ---
    
    // Obtém o valor do campo "Nome" usando o seu ID 'inNome'.
    const nome = document.getElementById('inNome').value;
    
    // Obtém o valor do campo "Altura" usando o seu ID 'inAltura'.
    const altura = document.getElementById('inAltura').value;

    // Obtém o sexo selecionado. Usamos o 'name="sexo"' e verificamos qual radio button está 'checked'.
    let sexo = '';
    if (document.getElementById('inMasculino').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('inFeminino').checked) {
        sexo = 'Feminino';
    }

    // --- 3. Criar a mensagem de resposta ---
    
    let mensagemResposta = `Olá, ${nome}!`;
    
    // Verifica se todos os campos foram preenchidos para montar uma mensagem mais completa.
    if (nome && altura && sexo) {
        mensagemResposta += ` Recebemos os seguintes dados:`;
        mensagemResposta += `\n- Seu nome é: ${nome}`;
        mensagemResposta += `\n- Seu sexo é: ${sexo}`;
        mensagemResposta += `\n- Sua altura é: ${altura} metros`;
        mensagemResposta += `\n\n**Obrigado por enviar os dados!**`;
    } else {
         mensagemResposta += ` Não foi possível obter todos os dados. Por favor, verifique se preencheu todos os campos.`;
    }
    
    // --- 4. Mostrar a mensagem de resposta na tela ---

    // A forma mais simples de mostrar uma resposta é usando um alert.
    alert(mensagemResposta);
    
    // Outra opção é criar um novo elemento na página (abaixo do h3, por exemplo).
    const respostaElemento = document.createElement('p');
    respostaElemento.textContent = mensagemResposta.replace(/\n/g, ' '); // Remove as quebras de linha para o texto na tela.
    
    // Adiciona uma quebra de linha (br) para manter o conteúdo abaixo do h3
    const h3 = document.querySelector('h3');
    h3.parentNode.insertBefore(respostaElemento, h3.nextSibling);

    // Limpa o formulário após a submissão (opcional)
    document.querySelector('form').reset();
}

// 5. Adiciona o "ouvinte de evento" ao formulário.
// Captura o formulário pelo seu primeiro elemento <form> na página.
const formulario = document.querySelector('form');

// Quando o formulário for submetido (botão "Calcular Peso Ideal" for clicado),
// a função 'receberDadosEResponder' será executada.
formulario.addEventListener('submit', receberDadosEResponder);