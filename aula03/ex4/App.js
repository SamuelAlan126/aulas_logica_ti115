let numero = prompt("Digite um número:");

numero = parseFloat(numero);

// Verifica se é positivo, negativo ou zero
if (numero > 0) {
    alert("Número positivo");
} else if (numero < 0) {
    alert("Número negativo");
} else {
    alert("O número é zero");
}

// Exibe o número no console
console.log("O número digitado foi: " + numero);