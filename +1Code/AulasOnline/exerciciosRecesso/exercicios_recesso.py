# 1 Faça uma função que recebe a média final de um aluno por parametro e retorna o seu conceito, conforme a 
# tabela abaixo:

# 	Nota	        Conceito
# 	de 0,0 a 4,9	D
# 	de 5,0 a 6,9	C
# 	de 7,0 a 8,9	B
# 	de 9,0 a 10,0	A

# RESOLUCAO
# def obter_conceito(media_final):
#     if 0.0 <= media_final <= 4.9:
#         return 'D'
#     elif 5.0 <= media_final <= 6.9:
#         return 'C'
#     elif 7.0 <= media_final <= 8.9:
#         return 'B'
#     elif 9.0 <= media_final <= 10.0:
#         return 'A'
#     else:
#         return 'Nota inválida'

# media_final_aluno = float(input("Digite a média final do aluno: "))
# conceito_aluno = obter_conceito(media_final_aluno)
# print(f'O conceito do aluno é: {conceito_aluno}')


# ----------------------------------------------------------------------------------------------------------------------
# 2 Faça um procedimento (função) que recebe 3 valores inteiros por parâmetro e retorna-os ordenados em ordem 
# crescente.

# RESOLUCAO
def ordem_crescente(a, b, c):
    if a <= b <= c:
        return a, b, c
    elif a <= c <= b:
        return a, c, b
    elif b <= a <= c:
        return b, a, c
    elif b <= c <= a:
        return b, c, a
    elif c <= a <= b:
        return c, a, b
    else:
        return c, b, a

valores = []  # Lista para armazenar os valores

# loop for para obter os três valores
for i in range(3):
    valor = int(input(f"Digite o valor {i + 1} : "))
    valores.append(valor)

# Desempacota os valores retornados pela função
ordem = ordem_crescente(*valores)

# Imprime o resultado
print(f'A ordem crescente dos números é: {ordem[0]}, {ordem[1]}, {ordem[2]}')

# ----------------------------------------------------------------------------------------------------------------------
# 3 Faça um procedimento que recebe, por parâmetro, a hora de inicio e a hora de término de um jogo, ambas subdivididas
# em 2 valores distintos: horas e minutos. O procedimento deve retornar, também por parâmetro, a duração do jogo em 
# horas e minutos, considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode começar em um 
# dia e terminar no outro.

# RESOLUCAO

def ordem_crescente(h, m):
    if h:
        return a, b, c

# obter a hora de inicio e a hora de término de um jogo
hora_inicio = str(input(f"Digite o horário em horas e minutos do inicio do jogo: "))
hora_termino = str(input(f"Digite o horário em horas e minutos do termino do jogo: "))

# ----------------------------------------------------------------------------------------------------------------------
# 4 Escreva um procedimento que recebes 3 valores reais X, Y e Z e que verifique se esses valores podem ser os 
# comprimentos dos lados de um triângulo e, neste caso, retornar qual o tipo de triângulo formado. Para que X, Y e Z 
# formem um triângulo é necessário que a seguinte propriedade seja satisfeita: o comprimento de cada lado de um 
# triângulo é menor do que a soma do comprimento dos outros dois lados. O procedimento deve identificar o tipo de 
# triângulo formado observando as seguintes definições:

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 	Triângulo Equilátero: os comprimentos dos 3 lados são iguais.
# 	Triângulo Isósceles: os comprimentos de 2 lados são iguais.
# 	Triângulo Escaleno: os comprimentos dos 3 lados são diferentes.

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 5 Faça uma função que receba o número de notas e leia os valores positivos para cada uma dessas notas, e retorne a 
# média aritmética dos mesmos.

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 6 Faça uma função que receba um valor inteiro e positivo e calcula o seu fatorial (fatorial é a multiplicação entre
#  o número e todos os menores que ele até que chegue em 1, ex: 5! (a exclamação representa o fatorial) = 5*4*3*2*1).

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 7 Faça um procedimento que lê 50 valores inteiros e retorna o maior e o menor deles.

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 8 Faça uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna o número de divisores desse valor.

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 9 Faça uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna os divisores dele, numa lista.

# RESOLUCAO


# ----------------------------------------------------------------------------------------------------------------------
# 10 Faça uma função que recebe um número por parametro, e retorna um booleano, indicando se ele é um número primo ou 
# não. (números primos são aqueles apenas divisiveis por 1 e por eles mesmos)

# RESOLUCAO

