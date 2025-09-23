// A divisão dos números ... e ... é ...
// A média dos números ... e ... é ...

let numero1 = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

document.getElementById('resultado').innerHTML = `
<p>
    O números digitados foram ${numero1} e ${numero2}. <br/>
    A soma dos números ${numero1} e ${numero2} é ${numero1+numero2}. <br/>
    A subtração dos números ${numero1} e ${numero2} é ${numero1 - numero2}. <br/>
    A multiplicação dos números ${numero1} e ${numero2} é ${numero1 * numero2}. <br/>
    A divisão dos números ${numero1} e ${numero2} é ${numero1 / numero2}. <br/>
    A média dos números ${numero1} e ${numero2} é ${(numero1 + numero2)/2}.
</p>
`