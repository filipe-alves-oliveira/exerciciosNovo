from Forma import Forma

class Triangulo(Forma):
    def __init__(self, base, altura, lado_a, lado_b):
        self.base = base
        self.altura = altura
        self.lado_a = lado_a
        self.lado_b = lado_b
        super.__init__(3)
        
    def area(self):
        return self.base * self.altura / 2
    
    def perimetro(self):
        return self.base + self.lado_a + self.lado_b