import tkinter as tk
from tkinter import messagebox
import os
import csv

emprestimo = []

def cadastrarEmprestimo():
  usuario = entryUsuario.get()
  livro = entryLivro.get()
  data = entryData.get()

  if usuario and livro and data:
    emprestimo={
      'usuario': usuario,
      'livro': livro
    }

janela = tk.Tk()
janela.title("Sistema de Empréstimos de Livros")
#Tamanho da Janela
janela.geometry("500x500")

labelUsuario = tk.Label(janela, text="Nome do Usuário")
labelUsuario.pack(pady=5)
entryUsuario = tk.Entry(janela)
entryUsuario.pack(pady=5)

labelLivro = tk.Label(janela, text="Nome do Livro")
labelLivro.pack(pady=5)
entryLivro = tk.Entry(janela)
entryLivro.pack(pady=5)

labelData = tk.Label(janela,text="Data de Emprétimo")
labelData.pack(pady=5)
entryData = tk.Entry(janela)
entryData.pack(pady=5)

btnCadastrar = tk.Button(janela,text="Cadastrar Empréstimo", command=cadastrarEmprestimo)
btnCadastrar.pack(pady=10)
