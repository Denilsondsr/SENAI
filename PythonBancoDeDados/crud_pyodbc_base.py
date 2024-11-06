import pyodbc

DRIVER = 'ODBC Driver 17 for SQL Server'
SERVER = 'localhost'
DATABASE = 'LojaDB'
USERNAME = 'senai'
PASSWORD = 'senai'

connectionString = f'DRIVER={DRIVER};SERVER={SERVER};DATABASE={DATABASE};UID={USERNAME};PWD={PASSWORD}'

try:
    conn = pyodbc.connect(connectionString)
    print("Conexão bem-sucedida!")
    cursor = conn.cursor()
    # Você pode adicionar uma simples consulta para verificar os dados
    cursor.execute("SELECT 1")
    for row in cursor:
        print(row)
except pyodbc.InterfaceError as e:
    print("Erro de interface:", e)
except Exception as e:
    print("Outro erro:", e)


#CREATE: Inserção de novo registro
string_sql = """
INSERT INTO dbo.Clientes VALUES ('5', 'Maria', 'São Paulo')
"""
cursor.execute(string_sql)
conn.commit()


#READ: Para buscar todos os registros da tabela Clientes:
string_sql = """
SELECT * FROM dbo.Clientes
"""
cursor.execute(string_sql)
resultados = cursor.fetchall()
for row in resultados:
    print(row)

#READ : Para buscar um registro específico, por exemplo, o cliente com ClienteID = 4:
string_sql = """
SELECT * FROM dbo.Clientes WHERE ClienteID = '4'
"""
cursor.execute(string_sql)
registro = cursor.fetchone()
print(registro)


#UPDATE: Para atualizar o nome ou a cidade de um cliente específico, por exemplo, o cliente com ClienteID = 4:
string_sql = """
UPDATE dbo.Clientes SET NomeCliente = 'André', Cidade = 'Campinas' WHERE ClienteID = '4'
"""
cursor.execute(string_sql)
conn.commit()

#DELETE:
string_sql = """
DELETE FROM dbo.Clientes WHERE ClienteID = '4'
"""
cursor.execute(string_sql)
conn.commit()

