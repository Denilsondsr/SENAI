-- CÓDIGOS SQL PARA CRIAR USUARIO senai , senha senai. para utilização no Python
-- E TAMBÉM UM BANCO CHAMADO BIBLIOTECABACKEND com as tabelas aluno, livro, emprestimo, avaliacaoLivro
-- Atenção: voce deve habilitar o login via autenticação SQL SERVER no SSMS


-- 1. Criar o usuário 'senai' com a senha 'senai'
CREATE LOGIN senai WITH PASSWORD = 'senai';

-- 2. Criar o banco de dados 'BibliotecaBackend'
CREATE DATABASE [BibliotecaBackend];

-- 3. Dar permissões totais para o usuário 'senai' no banco de dados 'BibliotecaBackend'
USE [BibliotecaBackend];
CREATE USER senai FOR LOGIN senai;
EXEC sp_addrolemember 'db_owner', 'senai';

-- 4. Criar as tabelas com as chaves primárias e estrangeiras

-- Tabela Aluno
CREATE TABLE Aluno (
    AlunoID INT PRIMARY KEY IDENTITY(1,1),
    NomeAluno VARCHAR(100) NOT NULL
);

-- Tabela Livro
CREATE TABLE Livro (
    LivroID INT PRIMARY KEY IDENTITY(1,1),
    NomeLivro VARCHAR(100) NOT NULL
);

-- Tabela Emprestimos
CREATE TABLE Emprestimos (
    EmprestimoID INT PRIMARY KEY IDENTITY(1,1),
    AlunoID INT NOT NULL,
    LivroID INT NOT NULL,
    DataEmprestimo DATE NOT NULL,
    FOREIGN KEY (AlunoID) REFERENCES Aluno(AlunoID),
    FOREIGN KEY (LivroID) REFERENCES Livro(LivroID)
);

-- Tabela AvaliacoesLivros
CREATE TABLE AvaliacoesLivros (
    AvaliacaoID INT PRIMARY KEY IDENTITY(1,1),
    AlunoID INT NOT NULL,
    LivroID INT NOT NULL,
    ComentariosLivro VARCHAR(255),
    FOREIGN KEY (AlunoID) REFERENCES Aluno(AlunoID),
    FOREIGN KEY (LivroID) REFERENCES Livro(LivroID)
);

-- 5. Inserir alguns dados de exemplo

-- Inserir dados na tabela Aluno
INSERT INTO Aluno (NomeAluno) VALUES ('João Silva');
INSERT INTO Aluno (NomeAluno) VALUES ('Maria Oliveira');
INSERT INTO Aluno (NomeAluno) VALUES ('Pedro Santos');

-- Inserir dados na tabela Livro
INSERT INTO Livro (NomeLivro) VALUES ('Introdução ao SQL');
INSERT INTO Livro (NomeLivro) VALUES ('Python para Iniciantes');
INSERT INTO Livro (NomeLivro) VALUES ('Desenvolvimento Web');

-- Inserir dados na tabela Emprestimos
INSERT INTO Emprestimos (AlunoID, LivroID, DataEmprestimo) VALUES (1, 1, '2024-11-01');
INSERT INTO Emprestimos (AlunoID, LivroID, DataEmprestimo) VALUES (2, 2, '2024-11-02');
INSERT INTO Emprestimos (AlunoID, LivroID, DataEmprestimo) VALUES (3, 3, '2024-11-03');

-- Inserir dados na tabela AvaliacoesLivros
INSERT INTO AvaliacoesLivros (AlunoID, LivroID, ComentariosLivro) VALUES (1, 1, 'Ótimo livro para iniciantes.');
INSERT INTO AvaliacoesLivros (AlunoID, LivroID, ComentariosLivro) VALUES (2, 2, 'Aprendi muito com este livro.');
INSERT INTO AvaliacoesLivros (AlunoID, LivroID, ComentariosLivro) VALUES (3, 3, 'Excelente para quem quer começar no desenvolvimento web.');
