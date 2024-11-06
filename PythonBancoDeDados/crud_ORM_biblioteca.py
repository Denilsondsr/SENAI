from sqlalchemy import create_engine, Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship

# Configuração de conexão
DATABASE_URL = "mssql+pyodbc://senai:senai@localhost/BibliotecaBackend?driver=ODBC+Driver+17+for+SQL+Server"

# Configuração do SQLAlchemy
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Definindo as classes de modelo

class Aluno(Base):
    __tablename__ = 'Aluno'
    
    AlunoID = Column(Integer, primary_key=True, autoincrement=True)
    NomeAluno = Column(String(100), nullable=False)
    emprestimos = relationship("Emprestimos", back_populates="aluno")
    avaliacoes = relationship("AvaliacoesLivros", back_populates="aluno")

class Livro(Base):
    __tablename__ = 'Livro'
    
    LivroID = Column(Integer, primary_key=True, autoincrement=True)
    NomeLivro = Column(String(100), nullable=False)
    emprestimos = relationship("Emprestimos", back_populates="livro")
    avaliacoes = relationship("AvaliacoesLivros", back_populates="livro")

class Emprestimos(Base):
    __tablename__ = 'Emprestimos'
    
    EmprestimoID = Column(Integer, primary_key=True, autoincrement=True)
    AlunoID = Column(Integer, ForeignKey('Aluno.AlunoID'), nullable=False)
    LivroID = Column(Integer, ForeignKey('Livro.LivroID'), nullable=False)
    DataEmprestimo = Column(Date, nullable=False)
    aluno = relationship("Aluno", back_populates="emprestimos")
    livro = relationship("Livro", back_populates="emprestimos")

class AvaliacoesLivros(Base):
    __tablename__ = 'AvaliacoesLivros'
    
    AvaliacaoID = Column(Integer, primary_key=True, autoincrement=True)
    AlunoID = Column(Integer, ForeignKey('Aluno.AlunoID'), nullable=False)
    LivroID = Column(Integer, ForeignKey('Livro.LivroID'), nullable=False)
    ComentariosLivro = Column(String(255))
    aluno = relationship("Aluno", back_populates="avaliacoes")
    livro = relationship("Livro", back_populates="avaliacoes")

# Criando as tabelas no banco de dados
Base.metadata.create_all(bind=engine)

# Funções CRUD

def create_aluno(nome):
    session = SessionLocal()
    novo_aluno = Aluno(NomeAluno=nome)
    session.add(novo_aluno)
    session.commit()
    session.refresh(novo_aluno)
    session.close()
    return novo_aluno

def read_alunos():
    session = SessionLocal()
    alunos = session.query(Aluno).all()
    session.close()
    return alunos

def read_aluno(aluno_id):
    session = SessionLocal()
    aluno = session.query(Aluno).filter(Aluno.AlunoID == aluno_id).first()
    session.close()
    return aluno

def update_aluno(aluno_id, novo_nome):
    session = SessionLocal()
    aluno = session.query(Aluno).filter(Aluno.AlunoID == aluno_id).first()
    if aluno:
        aluno.NomeAluno = novo_nome
        session.commit()
    session.close()

def delete_aluno(aluno_id):
    session = SessionLocal()
    aluno = session.query(Aluno).filter(Aluno.AlunoID == aluno_id).first()
    if aluno:
        session.delete(aluno)
        session.commit()
    session.close()

# Exemplo de uso para tabela Aluno
print("CREATE Aluno:")
novo_aluno = create_aluno("Carlos Silva")
print(novo_aluno)

print("\nREAD Alunos:")
alunos = read_alunos()
for aluno in alunos:
    print(aluno.NomeAluno)

print("\nREAD Aluno específico:")
aluno = read_aluno(novo_aluno.AlunoID)
print(aluno.NomeAluno if aluno else "Aluno não encontrado")

print("\nUPDATE Aluno:")
update_aluno(novo_aluno.AlunoID, "Carlos Souza")

print("\nDELETE Aluno:")
delete_aluno(novo_aluno.AlunoID)
print("Aluno deletado")
