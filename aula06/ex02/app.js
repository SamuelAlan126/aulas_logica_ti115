//receba dois numeros e retorne a soma entre eles. Depois, crie outra função chamada multiplicacao que tambem receba dois numero e retorne o resultado da multipliacao

function soma(a, b){
    return a + b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

function subtracao(a, b){
    return b - b;
}

console.log(soma(5, 7));
console.log(multiplicacao(5, 7));
console.log(divisao(5, 7));
console.log(subtracao(5, 7));

//Escreva uma função chamada calculadora que retorna receba 2 numeros digitados pelo usuario e retorne uma alert com a soma, subtração, multiplicação e divisão desses dois numeros.

function calculadora(){
    let a = parseFloat(prompt("Digite o primeiro numero:"))
    let b = parseFloat(prompt("Digite o segundo numero:"))
    alert("Soma: " + soma(a, b) + "\n" + "Subtração: " + subtracao(a, b) + "\n" + "Multiplicação: " + multiplicacao(a, b) + "\n" + "Divisão: " + divisao(a, b));
}

calculadora();


