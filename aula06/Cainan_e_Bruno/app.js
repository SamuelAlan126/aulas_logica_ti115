// Crie um programa onde o usuario devera digitar em um prompt que esta perguntando quem esta logado, sendo 1 - Cainan, 2 - Bruno e 3 - Labubu e exiba em alert o nome do usuario.

document.getElementById('verificarBtn').addEventListener('click', function() {
    // Pede ao usuário para digitar o número correspondente
    const usuario = prompt("Quem está logado?\n\n1 - Cainan\n2 - Bruno\n3 - Labubu");

    let nomeUsuario;

    // Usa a estrutura 'switch' para determinar o nome com base no número
    switch (usuario) {
        case "1":
            nomeUsuario = "Cainan";
            break;
        case "2":
            nomeUsuario = "Bruno";
            break;
        case "3":
            nomeUsuario = "Labubu";
            break;
        default:
            nomeUsuario = "Usuário não identificado.";
    }

    // Exibe o nome do usuário em um alerta
    if (nomeUsuario) {
        alert("O usuário logado é: " + nomeUsuario);
    }
});