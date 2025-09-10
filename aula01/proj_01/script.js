let nome = "Robson"
let idade = 63;
let nota = 6;

console.log("olá mundo! Estou aqui Samuel");
console.log("olá mundo! Estou aqui " + nome + "idade de: " + idade);

console.log("Daqui a 10 anos terei: " + (idade + 10));

//template string

console.log(`hoje tenho ${idade} anos daqui a 5 anos terei ${idade + 5}`);

if (idade > 18) {
    console.log("Você é maior de idade")
}

if (nota > 7) {
    console.log(`aprovado irmão - nota final ${nota}"`);
}
else if (nota >= 5) {
    console.log(`Recuperação arrombado = nota final ${nota}`);
}
else {
    console.log(`Reprovado - nota ${nota}`);
}

let pi = 3.14

console.log(pi);

pi = 62;

console.log(pi);


let n1, n2, n3

n1 = 10
n2 = 3
n3 = 8
media = (n1+n2+n3) / 3 

console.log("A média é " + media);






