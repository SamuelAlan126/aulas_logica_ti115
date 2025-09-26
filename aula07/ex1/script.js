const campoValor = document.getElementById("valor");
const botao = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");


//botao.addEventListener('click', () => {
    resultadoDiv.textContent = ("só a cabecinha")
    alert("Só a goiaba!")
    console.log("Eu sei, mas não sei como provar")
//})

botao.addEventListener('click', () => {
    const valor = parseFloat(campoValor.value);
    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.textContent = "Por favor, insira um valor válido maior que zero.";
        return;
    }
    const valorFinal = valor * 1.10;
    resultadoDiv.textContent =  formatarReal(valorFinal);
    resultadoDiv.style.color = "blue";
    console.log(valor)
})

function formatarReal(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

