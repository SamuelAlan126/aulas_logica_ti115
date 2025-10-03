const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", ouvirte);

function ouvirte(e) {
    e.preventDefault(); // Evita envio do formulário

    // Obtém o número digitado
    const numero = Number(frm.inNumero.value);

    // Verifica se o número é válido e não negativo
    if (numero < 0) {
        resp.innerText = "Não existe raiz real para número negativo!";
    } else if (isNaN(numero)) {
        resp.innerText = "Por favor, digite um número válido!";
    } else {
        // Calcula a raiz quadrada
        const raiz = Math.sqrt(numero);

        // Exibe o resultado (arredondado para 2 casas decimais)
        resp.innerText = `Raiz quadrada de ${numero} = ${raiz.toFixed(2)}`;
    }
}