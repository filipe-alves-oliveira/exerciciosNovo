class Automovel:
    def __init__(self, numero_rodas, meio):
        self.numero_rodas = numero_rodas
        self.meio = meio
        self.ligado = False
        self.velocidade = 0
    
    def ligar(self):
        if not self.ligado:
            self.ligado = True  #caso nao esteja ligado, liga
    
    def acelerar(self, segundos):
        print(f"Acelerou {segundos} seg")
        self.velocidade = segundos*1
        
        


class Carro:
    numero_rodas = 4
    
    def __init__(self, ano, modelo, placa):
        self.ano = ano
        self.modelo = modelo
        self.placa = placa
        self.velocidade = 0

    @staticmethod #só pertence aquele metodo.
    def ligar():
        print("O carro ligou!")

    def acelerar(self, segundos):
        print(f"vrum vrum {self.modelo} {segundos} seg")
        self.__aumentar_velocidade(segundos*1)

palio = Carro(2010, "Palio", "ABC1234")
fusca = Carro(2000, "Fusca", "ADE1234")
moto = Automovel(2, "Terrestre")

palio.acelerar(4)
fusca.acelerar(7)

print(moto.ligado)
moto.ligar()

    def aumentar_velocidade(self, km):