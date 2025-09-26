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
let valor1 = parseFloat(prompt("Digite o Valor 1:"))
let valor2 = parseFloat(prompt("Digite o Valor 2:"))

if( !isNaN(valor1) && !isNaN(valor2)){
    const resultado = calculadora(valor1, valor2)
    alert(`
    Soma = ${resultado.soma}\n
    Subt = ${resultado.subtracao}\n
    Mult = ${resultado.multiplicacao}\n
    Div = ${resultado.divisao}\n
    `)
} else {
    alert("Digite apenas numeros! aff")
}

function calculadora(a, b){

    let resuntadoDivisao;
    if(b === 0){
        resuntadoDivisao = "Hello world"
    } else {
        resuntadoDivisao = a / b
    }

    return {
        soma: a+b,
        subtracao: a-b,
        multiplicacao: a*b,
        divisao: resuntadoDivisao
    }
    
}


