// Exercício 1 - Boas-vindas
let nome;
let idade;
let altura;
let genero;
let estudante = true || false;

nome = prompt("Informe seu nome: ");
idade = prompt("Informe sua idade: ");
altura = prompt("Informe sua altura: ");
genero = prompt("Informe seu gênero: ");


console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Altura: " + altura);
console.log("Gênero: " + genero);

estudante = confirm("Você é estudante?");

alert("Bem-vindo(a), " + nome + "!" + "\n" + "Idade: " + idade + "\n" + "Altura: " + altura + "\n" + "Gênero: " + genero + "\n" + "Estudante: " + estudante);