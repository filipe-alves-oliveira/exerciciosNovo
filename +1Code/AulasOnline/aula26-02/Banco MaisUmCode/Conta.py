import random

class Conta:
    
    def __init__(self, tipo, usuario, saldo = 0.0):  
        self.tipo = tipo
        self.usuario = usuario
        self.saldo = saldo
        self.numero = Conta.gera_numero_conta()
        
    @staticmethod
    def gera_numero_conta():
        return f'{random.randint(1, 100000):06}'
    
    def depositar(self, valor):
        self.saldo += valor
        
    def sacar(self, valor):
        if self.saldo - valor >= 0:
            self.saldo -= valor
        else:
            raise Exception("Saldo Insuficiente!")
            
    def transferir(self, conta, valor):
        self.sacar(valor)
        conta.depositar(valor)

# conta1 = Conta("corrente", "conta1")
# print(conta1.numero) 011483
