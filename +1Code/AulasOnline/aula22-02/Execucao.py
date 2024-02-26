from Soma import Soma
from Subtracao import Subtracao
from Multiplicacao import Multiplicacao
from Operacao import Operacao

operacoes = {
    '+': Soma(),
    '-': Subtracao(),
    '*': Multiplicacao()
}


a = float(input(f"insira o primeiro número: "))
b = float(input(f"insira o segundo número: "))
op = input(f"Digite a operação desejada: ")

resultado: Operacao = operacoes[op]
print(resultado.executar(a, b))