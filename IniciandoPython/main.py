import tkinter as tkter

def dizerOla():
  if rotulo.cget("text")=="":
    rotulo.config(text="Olá, mundo!")
  else:
    rotulo.config(text="")

janela = tkter.Tk()
janela.title("Dizer Olá")
janela.geometry("500x500")
janela.resizable(height=True,width=True)

janela.minsize(width=100,height=300)
janela.maxsize(width=600,height=600)

botaoDizer = tkter.Button(janela, text="Olá, mundo!", command=dizerOla)
botaoDizer.pack(pady=100)

rotulo = tkter.Label(janela,text="")
rotulo.pack()



janela.mainloop()
