let idade = parseInt(prompt("Informe sua idade:"))
let acompanhante = true
if(idade >= 18){
    alert("Pode entrar")
} else if (idade >=16 && acompanhante == true) {
    alert("Pode entrar acompanhado")
}
else{
    alert("banido")
}