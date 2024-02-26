from Forma import Forma

class Paralelogramo(Forma):
    def __init__(self, lado_a, lado_b):
        self.lado_a = lado_a
        self.lado_b = lado_b
        super().__init__(4)
        
    def area(self):
        return self.lado_a * self.lado_b
    
    def perimetro(self):
        return self.lado_a + self.lado_b 