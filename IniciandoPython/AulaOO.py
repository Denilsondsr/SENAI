class Celular:
  marca = "Nokia"
  modelo = "Tijolão"
  cor="Azul"
  temCamera=False
  bateria="Infinita"

  def fazerLigacao(self):
    print("Fazendo Ligação...")

  def jogarCobrinha(self):
    print("Jogando o jogo da Cobrinha...")
  
  def despertador(self):
    print("Despertando ...")

celular = Celular()

print(celular.marca)
print(celular.jogarCobrinha())