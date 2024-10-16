import tkinter as tkter

def dizerOla():
  rotulo.config(text="Olá, mundo!")

janela = tkter.Tk()
janela.title("Dizer Olá")

botaoDizer = tkter.Button(janela, text="Olá, mundo!", command=dizerOla)
botaoDizer.pack(pady=20)

rotulo = tkter.Label(janela,text="")
rotulo.pack()

janela.mainloop()
