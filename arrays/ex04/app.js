let filmes = ["Inception", "Interstellar", "The Dark Knight", "Pulp Fiction"];
 
console.log(filmes);
 
// Quero adicionar um item no final do array
filmes.push("Matrix");
 
filmes[1] = "Invocação do Mal";
 
console.log(filmes);
 
// Quero remover o último item do array
filmes.pop();
 
// Quero adicionar primeiro item do array
filmes.unshift("Clube da Luta");
console.log(filmes);
 
// Quero remover o primeiro item do array
filmes.shift();
console.log(filmes);
 
// Quero saber o tamanho do array
console.log("Tamanho do array: " + filmes.length);
// Quero saber a posição de um item no array
console.log("Posição do filme: " + filmes.indexOf("Inception"));
 
// Quero remover um item específico do array
let indice = filmes.indexOf("Pulp Fiction");
if (indice !== -1) {
    filmes.splice(indice, 1);
}
console.log(filmes);