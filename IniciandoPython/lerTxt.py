arquivo = open("notas.txt","r") # Abrindo arquivo somente leitura
linhas = arquivo.readlines()
print(linhas)
arquivo.close()

aluno = input("Digite o nome:\n")
nota = input("Digite a Nota:\n")

arquivoEscrita = open("notas.txt","a") #Abrindo arquivo para editar
