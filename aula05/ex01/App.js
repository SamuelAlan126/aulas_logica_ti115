// break

const dia = prompt(
  "Digite o número correspondente ao dia da semana:\n" +
    "1 = domingo\n" +
    "2 = segunda\n" +
    "3 = terça\n" +
    "4 = quarta\n" +
    "5 = quinta\n" +
    "6 = sexta\n" +
    "7 = sábado"
);

switch (dia) {
  case "1":
    console.log("Domingo");
    break;
  case "2":
    console.log("Segunda");
    break;
  case "3":
    console.log("Terça");
    break;
  case "4":
    console.log("Quarta");
    break;
  case "5":
    console.log("Quinta");
    break;
  case "6":
    console.log("Sexta");
    break;
  case "7":
    console.log("Sábado");
    break;        
  default:
    console.log("Dia inválido");
}
