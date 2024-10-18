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
// let cores = ["Vermelho", "Verde", "Azul"];
// console.log(cores);
// cores[1] = "Amarelo";
// console.log(cores);
// console.log(cores[2]);

//2.
// let animais = ["Gato", "Cachorro", "Pássaro"];
// console.log(animais);
// animais.push("Elefante");
// console.log(animais);
// animais.shift();
// console.log(animais);

//3.
// let pais = ["Brasil", "Argentina", "Chile", "Uruguai"];
// console.log(pais);
// console.log(pais.length);

//4.
// let numeros = [10, 20, 30, 40, 50];
// console.log(numeros);
// console.log(numeros.indexOf(30));

//5.
// let alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
// let novaReceita = alimentos.slice(1, 3);
// console.log(novaReceita);
// ----------------------------------------

// JAVASCRIPT - AULA 04 - OBJECTS

// ----------------------------------------
// ----------------------------------------

// EXERCÍCIO 19

// ----------------------------------------
//1.
// let livro = {
//   titulo: "O Senhor dos Anéis",
//   autor: "J.R.R. Tolkien",
//   ano: 1954,
// };
// console.log(livro.titulo);
// console.log(livro.autor);

//2.
// let carro = {
//   marca: "Honda",
//   modelo: "Civic",
//   ano: 2020,
// };
// console.log(carro);
// carro.ano = 2022;
// console.log(carro);
// carro.cor = "Prata";
// console.log(carro);

//3.
// let pessoa = {
//   nome: "Carlos",
//   idade: 28,
//   cumprimento: function () {
//     return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
//   },
// };
// console.log(pessoa.cumprimento());

//4.
// let aluno = {
//   nome: "Mariana",
//   curso: "Engenharia",
// };

// if ("idade" in aluno) {
//   console.log("Contem idade");
// } else {
//   console.log("Idade não cadastrada");
//   aluno.idade = 21;
//   console.log("Idade cadastrada com sucesso");
//   console.log(aluno);
// }

//5.
// let endereco = {
//   rua: "Av. Paulista",
//   numero: 1000,
//   cidade: {
//     nome: "São Paulo",
//     estado: "SP",
//   },
// };
// console.log(endereco.cidade.nome);
// console.log(endereco.cidade.estado);
// ----------------------------------------

// JAVASCRIPT - AULA 05 - FUNCTIONS

// ----------------------------------------
// ----------------------------------------

// EXERCÍCIO 20

// ----------------------------------------
const prompt = require("prompt-sync")();
//1.
// function saudar(nome) {
//   console.log(`Bora treinar ${nome}, Seu Frango!`);
// }
// saudar("Denilson");

//2.
// function multiplicar(repeticoes, kg) {
//   return repeticoes * kg;
// }
// repeticoes = prompt("Digite a quantidade de repetições:");
// kg = prompt("Digite a carga:");

// console.log(`A carga total é: ${multiplicar(repeticoes, kg)}`);

//3.
// function contarLetras(senha) {
//   let contagem = senha.length;
//   if (contagem < 8) {
//     console.log(
//       `A senha tem apenas ${contagem} caracteres, deve ter 8 ou mais`
//     );
//   } else {
//     console.log(`Sua senha contem ${contagem} caracteres.\nSenha Aceita`);
//   }
// }
// senha = prompt("Digite sua senha:");
// contarLetras(senha);

//4.
// let calc = 0;
// function somarArray(precos) {
//   for (let i = 0; i < precos.length; i++) {
//     calc += precos[i];
//   }
//   return calc;
// }

// const precos = [10, 20, 30, 40, 50];
// console.log(somarArray(precos));

//5.
// function converterMetrosParaCentimetros(alturaM) {
//   return alturaM * 100;
// }
// alturaM = prompt("Digite sua Altura em Metros: ");
// console.log(
//   `A altura ${alturaM}m em centímetros é: ${converterMetrosParaCentimetros(
//     alturaM
//   )}cm.`
// );

//6.
// let media = 0;
// let calc = 0;
// function avaliarTreinos(nivelDificuldade) {
//   for (i = 0; i < nivelDificuldade.length; i++) {
//     calc += nivelDificuldade[i];
//   }
//   return (media = calc / nivelDificuldade.length);
// }

// let nivelDificuldade = [1, 2, 3, 4, 5];
// console.log(avaliarTreinos(nivelDificuldade));

// 7
// let disponivelHorario = [];
// let disponivelVagas = [];
// let vagas = 20;
// let calculo = 0;
// function controlarVagas(horarios, alunos) {
//   for (let i = 0; i < alunos.length; i++) {
//     if (alunos[i] < 20) {
//       calculo = vagas - alunos[i];
//       disponivelHorario.push(horarios[i]);
//       disponivelVagas.push(calculo);
//     }
//   }
//   return disponivelHorario;
// }
// horarios = [13, 14, 15, 16];
// alunos = [10, 11, 12, 22];

// let resultado = controlarVagas(horarios, alunos);

// console.log(resultado);
