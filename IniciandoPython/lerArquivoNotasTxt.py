with open("notas.txt","r") as arquivo: # Abrindo arquivo somente leitura. With fecha depois
  linhas = arquivo.readlines()
  print(linhas)

aluno = input("Digite o nome:\n")
nota = input("Digite a Nota:\n")

arquivoEscrita = open("notas.txt","a") #Abrindo arquivo para editar
arquivoEscrita.write("\n{},{}\n".format(aluno,nota))
arquivoEscrita.close()

arquivo = open("notas.txt","r")
linhas = arquivo.readlines()
arquivo.close()
print(linhas)