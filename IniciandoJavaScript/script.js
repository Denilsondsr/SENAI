// ----------------------------------------

// JAVASCRIPT - AULA 01

// ----------------------------------------

// EXERCÍCIO 16

// ----------------------------------------

// Exercício 1: Criando Variáveis Simples

// Pegando dados via prompt - npm install prompt-sync
// const prompt = require("prompt-sync")();

// let nome = prompt("Qual é seu nome? ");
// let idade = 26;
// let cidade = "São Paulo";
// console.log(`Olá, ${nome}!`);
// console.log(idade);
// console.log(cidade);

// Exercício 2: Operações Matemáticas Simples
// let num1 = 10;
// let num2 = 10;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// Exercício 3: Resto da Divisão
// let num = 10;
// console.log(num % 2 == 0 ? "Número Par" : "Número Impar");

// Exercício 4: Cálculo de Desconto
// let precoProd = 500;
// console.log(precoProd * 0.8);

// Exercício 5: Área de um Retângulo
// let comprimento = 10;
// let largura = 10;
// let area = comprimento * largura;
// console.log(area);

// EXERCÍCIO 16.1

// let salarioBruto = 3000;
// let imposto = 10;
// let despesas = 100;
// let bonus = 100;
// let temPlanoSaude = true;
// let valorImposto = (salarioBruto * imposto) / 100;
// let salarioLiquido = salarioBruto - valorImposto - despesas + bonus;

// if (temPlanoSaude) {
//   salarioLiquido -= 300;
// }

// let resultado = `Salario Liquido: R$ ${salarioLiquido.toFixed(2)}`;

// console.log(resultado);

// ----------------------------------------

// JAVASCRIPT - AULA 02 - MANIPULANDO STRINGS

// ----------------------------------------
// ----------------------------------------

// EXERCÍCIO 17

// ----------------------------------------
// Pegando dados via prompt - npm install prompt-sync

//1.
// const prompt = require("prompt-sync")();
// let senha = prompt("Digite sua senha para contarmos:");
// console.log(senha.length); // Conta a String

// 2.
// let texto = "Estudar é importante";
// console.log(texto.indexOf("importante")); // Busca a palavra na Strign

//3.
// let titulo = "Olá, Mundo!";
// console.log(titulo);
// console.log(titulo.replace("Mundo", "Visitante")); // Troca as palavras

//4.
// let nome = prompt("Digite seu nome: ");
// console.log(nome);

// console.log(nome.toUpperCase()); // Tudo em MAIÚSCULO

//5.
// let nomeCompleto = prompt("Digite seu nome completo:");
// console.log(nomeCompleto);

// let arrayNomeCompleto = nomeCompleto.split(" ");

// console.log(arrayNomeCompleto[0]);
// ----------------------------------------

// JAVASCRIPT - AULA 03 - ARRAY

// ----------------------------------------
// ----------------------------------------

// EXERCÍCIO 18

// ----------------------------------------

//1.
let cores = ["Vermelho", "Verde", "Azul"];
console.log(cores);
