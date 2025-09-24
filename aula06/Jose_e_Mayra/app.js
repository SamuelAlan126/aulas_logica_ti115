// Crie um programa que exiba o dia da semana conforme o usuario digitar no prompt um numero corresponde. Caso ele digite 1, deve aparecer a mensagem "O dia escolhido foi: Domingo". Se o usuario colocar algo diferente dos numeros de 1 a 7, apresentar a mensagem "Dia invalido".
document.getElementById('verificarBtn').addEventListener('click', function() {
    // Pega o valor do input e o converte para um número
    const diaNumero = parseInt(document.getElementById('diaInput').value);
    const resultadoDiv = document.getElementById('resultado');

    let mensagem = "";
    let classe = ""; // Para estilizar a mensagem (verde para sucesso, vermelho para erro)

    // Usa uma estrutura 'switch' para verificar o número
    switch (diaNumero) {
        case 1:
            mensagem = "O dia escolhido foi: Domingo";
            classe = "success";
            break;
        case 2:
            mensagem = "O dia escolhido foi: Segunda-feira";
            classe = "success";
            break;
        case 3:
            mensagem = "O dia escolhido foi: Terça-feira";
            classe = "success";
            break;
        case 4:
            mensagem = "O dia escolhido foi: Quarta-feira";
            classe = "success";
            break;
        case 5:
            mensagem = "O dia escolhido foi: Quinta-feira";
            classe = "success";
            break;
        case 6:
            mensagem = "O dia escolhido foi: Sexta-feira";
            classe = "success";
            break;
        case 7:
            mensagem = "O dia escolhido foi: Sábado";
            classe = "success";
            break;
        default:
            mensagem = "Dia inválido";
            classe = "error";
            break;
    }

    // Atualiza o conteúdo e a classe da div de resultado
    resultadoDiv.textContent = mensagem;
    resultadoDiv.className = `resultado-box ${classe}`;
});
  