import pyodbc

DRIVER = 'ODBC Driver 17 for SQL Server'
SERVER = 'localhost'
DATABASE = 'BibliotecaBackend'
USERNAME = 'senai'
PASSWORD = 'senai'

connectionString = f'DRIVER={DRIVER};SERVER={SERVER};DATABASE={DATABASE};UID={USERNAME};PWD={PASSWORD}'

try:
    conn = pyodbc.connect(connectionString)
    print("Conexão bem-sucedida!")
    cursor = conn.cursor()
    # Teste de conexão
    cursor.execute("SELECT 1")
    for row in cursor:
        print(row)
except pyodbc.InterfaceError as e:
    print("Erro de interface:", e)
except Exception as e:
    print("Outro erro:", e)


# CRUD para a tabela Aluno

# CREATE: Inserção de um novo aluno
string_sql = """
INSERT INTO Aluno (NomeAluno) VALUES ('Ana Souza')
"""
cursor.execute(string_sql)
conn.commit()

# READ: Buscar todos os alunos
string_sql = """
SELECT * FROM Aluno
"""
cursor.execute(string_sql)
resultados = cursor.fetchall()
for row in resultados:
    print(row)

# READ: Buscar um aluno específico, por exemplo, AlunoID = 1
string_sql = """
SELECT * FROM Aluno WHERE AlunoID = 1
"""
cursor.execute(string_sql)
registro = cursor.fetchone()
print(registro)

# UPDATE: Atualizar o nome de um aluno específico, por exemplo, AlunoID = 1
string_sql = """
UPDATE Aluno SET NomeAluno = 'João Oliveira' WHERE AlunoID = 1
"""
cursor.execute(string_sql)
conn.commit()

# DELETE: Deletar um aluno específico, por exemplo, AlunoID = 1
string_sql = """
DELETE FROM emprestimos WHERE AlunoID = 1
DELETE FROM Aluno WHERE AlunoID = 1
"""

cursor.execute(string_sql)
conn.commit()


# CRUD para a tabela Livro

# CREATE: Inserção de um novo livro
string_sql = """
INSERT INTO Livro (NomeLivro) VALUES ('Matemática Avançada')
"""
cursor.execute(string_sql)
conn.commit()

# READ: Buscar todos os livros
string_sql = """
SELECT * FROM Livro
"""
cursor.execute(string_sql)
resultados = cursor.fetchall()
for row in resultados:
    print(row)

# READ: Buscar um livro específico, por exemplo, LivroID = 1
string_sql = """
SELECT * FROM Livro WHERE LivroID = 1
"""
cursor.execute(string_sql)
registro = cursor.fetchone()
print(registro)

# UPDATE: Atualizar o nome de um livro específico, por exemplo, LivroID = 1
string_sql = """
UPDATE Livro SET NomeLivro = 'Introdução à Álgebra' WHERE LivroID = 1
"""
cursor.execute(string_sql)
conn.commit()

# DELETE: Deletar um livro específico, por exemplo, LivroID = 1
string_sql = """
DELETE FROM AvaliacoesLivros WHERE LivroID = 1
DELETE FROM Livro WHERE LivroID = 1
"""
cursor.execute(string_sql)
conn.commit()


# CRUD para a tabela Emprestimos

# CREATE: Inserção de um novo empréstimo
string_sql = """
INSERT INTO Emprestimos (AlunoID, LivroID, DataEmprestimo) VALUES (2, 3, '2024-11-01')
"""
cursor.execute(string_sql)
conn.commit()

# READ: Buscar todos os empréstimos
string_sql = """
SELECT * FROM Emprestimos
"""
cursor.execute(string_sql)
resultados = cursor.fetchall()
for row in resultados:
    print(row)

# READ: Buscar um empréstimo específico, por exemplo, EmprestimoID = 1
string_sql = """
SELECT * FROM Emprestimos WHERE EmprestimoID = 1
"""
cursor.execute(string_sql)
registro = cursor.fetchone()
print(registro)

# UPDATE: Atualizar a data de um empréstimo específico, por exemplo, EmprestimoID = 1
string_sql = """
UPDATE Emprestimos SET DataEmprestimo = '2024-11-02' WHERE EmprestimoID = 1
"""
cursor.execute(string_sql)
conn.commit()

# DELETE: Deletar um empréstimo específico, por exemplo, EmprestimoID = 1
string_sql = """
DELETE FROM Emprestimos WHERE EmprestimoID = 1
"""
cursor.execute(string_sql)
conn.commit()


# CRUD para a tabela AvaliacoesLivros

# CREATE: Inserção de uma nova avaliação
string_sql = """
INSERT INTO AvaliacoesLivros (AlunoID, LivroID, ComentariosLivro) VALUES (2, 3, 'Excelente livro para estudo avançado.')
"""
cursor.execute(string_sql)
conn.commit()

# READ: Buscar todas as avaliações
string_sql = """
SELECT * FROM AvaliacoesLivros
"""
cursor.execute(string_sql)
resultados = cursor.fetchall()
for row in resultados:
    print(row)

# READ: Buscar uma avaliação específica, por exemplo, AvaliacaoID = 1
string_sql = """
SELECT * FROM AvaliacoesLivros WHERE AvaliacaoID = 1
"""
cursor.execute(string_sql)
registro = cursor.fetchone()
print(registro)

# UPDATE: Atualizar o comentário de uma avaliação específica, por exemplo, AvaliacaoID = 1
string_sql = """
UPDATE AvaliacoesLivros SET ComentariosLivro = 'Bom livro para iniciantes e avançados.' WHERE AvaliacaoID = 1
"""
cursor.execute(string_sql)
conn.commit()

# DELETE: Deletar uma avaliação específica, por exemplo, AvaliacaoID = 1
string_sql = """
DELETE FROM AvaliacoesLivros WHERE AvaliacaoID = 1
"""
cursor.execute(string_sql)
conn.commit()
