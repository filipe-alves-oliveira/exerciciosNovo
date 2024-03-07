from Usuario import Usuario
from Endereco import Endereco
from Conta import Conta

endereco_rodrigo = Endereco("19880023", "33", "SP", "São Paulo", "Rua ABC")
rodrigo = Usuario("Rodrigo", 
                  "Mosken", 
                  "123453545", 
                  "11 996518191", 
                  endereco_rodrigo)
conta_rodrigo = Conta("corrente", rodrigo, 50)


endereco_douglas = Endereco("21330650", "55", "SP", "Assis", "Rua CDE")
douglas = Usuario("Douglas", 
                  "Pangaro", 
                  "9876543210", 
                  "21 996518191", 
                  endereco_douglas)
conta_douglas = Conta("corrente", douglas)

print(rodrigo.nome, rodrigo.sobrenome, ":", conta_rodrigo.numero, "\nEndereco: ", rodrigo.endereco.cidade, rodrigo.endereco.rua, "\nSaldo:", conta_rodrigo.saldo)

print(douglas.nome, douglas.sobrenome, ":", conta_douglas.numero, "\nEndereco: ", douglas.endereco.cidade, douglas.endereco.rua, "\nSaldo:", conta_douglas.saldo)

conta_rodrigo.transferir(conta_douglas, 50.0)