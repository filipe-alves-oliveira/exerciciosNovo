class Animal:
    def __init__(self, idade):
        self.idade = idade
        
    def comer(self, comida):
        print(f"Comi {comida}")
        
class Mamifero(Animal):
    
    def amamentar(self, filho):
        pass
    
    def comer(self, comida):
        print(f"Comi {comida} e bebi leite")
    
class Cachorro(Mamifero):
    def latir(self):
        pass
    
    def comer(self, comida):
        print(f"comida {comida}")
    
abelha = Animal(1)
morcego = Mamifero(2)
cachorro = Cachorro(4)

def alimentarse(bicho: Animal):
    bicho.comer("fruta")    
    
alimentarse(abelha)
alimentarse(morcego)
alimentarse(cachorro)