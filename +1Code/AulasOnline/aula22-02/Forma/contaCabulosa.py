from Forma import Forma
from Triangulo import Triangulo
from Paralelogramo import Paralelogramo

terreno1 = Paralelogramo(10, 7)
terreno2 = Triangulo(10, 10, 7, 5)

def conta(forma: Forma):
    return 2 * forma.area()

print(conta(terreno1))
print(conta(terreno2))
    