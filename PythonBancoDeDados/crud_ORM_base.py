from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

# Configuração da string de conexão
DATABASE_URL = "mssql+pyodbc://senai:senai@localhost/LojaDB?driver=ODBC+Driver+17+for+SQL+Server"

# Configuração do SQLAlchemy
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Modelo para a tabela Clientes
class Clientes(Base):
    __tablename__ = 'Clientes'
    
    ClienteID = Column(Integer, primary_key=True, autoincrement=True)
    NomeCliente = Column(String(100), nullable=False)
    Cidade = Column(String(100), nullable=False)

# Criar as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

# Conexão inicial para teste
try:
    session = SessionLocal()
    print("Conexão bem-sucedida!")
    session.close()
except Exception as e:
    print("Erro de conexão:", e)


# CREATE: Inserção de novo registro
def create_cliente(cliente_id, nome_cliente, cidade):
    session = SessionLocal()
    novo_cliente = Clientes(ClienteID=cliente_id, NomeCliente=nome_cliente, Cidade=cidade)
    session.add(novo_cliente)
    session.commit()
    session.refresh(novo_cliente)
    print(f"Cliente criado: {novo_cliente.ClienteID}, {novo_cliente.NomeCliente}, {novo_cliente.Cidade}")
    session.close()

create_cliente(5, 'Maria', 'São Paulo')


# READ: Para buscar todos os registros da tabela Clientes
def read_all_clientes():
    session = SessionLocal()
    clientes = session.query(Clientes).all()
    for cliente in clientes:
        print(cliente.ClienteID, cliente.NomeCliente, cliente.Cidade)
    session.close()

read_all_clientes()


# READ: Para buscar um registro específico, por exemplo, o cliente com ClienteID = 4
def read_cliente(cliente_id):
    session = SessionLocal()
    cliente = session.query(Clientes).filter(Clientes.ClienteID == cliente_id).first()
    if cliente:
        print(cliente.ClienteID, cliente.NomeCliente, cliente.Cidade)
    else:
        print("Cliente não encontrado.")
    session.close()

read_cliente(4)


# UPDATE: Para atualizar o nome ou a cidade de um cliente específico, por exemplo, o cliente com ClienteID = 4
def update_cliente(cliente_id, novo_nome, nova_cidade):
    session = SessionLocal()
    cliente = session.query(Clientes).filter(Clientes.ClienteID == cliente_id).first()
    if cliente:
        cliente.NomeCliente = novo_nome
        cliente.Cidade = nova_cidade
        session.commit()
        print(f"Cliente atualizado: {cliente.ClienteID}, {cliente.NomeCliente}, {cliente.Cidade}")
    else:
        print("Cliente não encontrado.")
    session.close()

update_cliente(4, 'André', 'Campinas')


# DELETE: Deletar um cliente específico, por exemplo, o cliente com ClienteID = 4
def delete_cliente(cliente_id):
    session = SessionLocal()
    cliente = session.query(Clientes).filter(Clientes.ClienteID == cliente_id).first()
    if cliente:
        session.delete(cliente)
        session.commit()
        print(f"Cliente deletado: {cliente_id}")
    else:
        print("Cliente não encontrado.")
    session.close()

delete_cliente(4)
