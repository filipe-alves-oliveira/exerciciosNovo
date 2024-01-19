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

# CORRECAO PROFESSOR
# def retorna_conceito(media_fim: float) -> str:
#     if media_fim < 5:
#         return 'D'  
#     elif media_fim < 7:
#         return 'C'
#     elif media_fim < 9:
#         return 'B'
#     elif media_fim <= 10:
#         return 'A'
#     return ''
# print(retorna_conceito(10)) //A

# ----------------------------------------------------------------------------------------------------------
# 2 Faça um procedimento (função) que recebe 3 valores inteiros por parâmetro e retorna-os ordenados em ordem 
# crescente.

# RESOLUCAO obs.: tupla coleção, lista, só  imutavel.
# se iniciar com a,b,c = c reduz uma compraçao else.

# def ordem_crescente(a, b, c):
#     if a <= b <= c:
#         return a, b, c
#     elif a <= c <= b:
#         return a, c, b
#     elif b <= a <= c:
#         return b, a, c
#     elif b <= c <= a:
#         return b, c, a
#     elif c <= a <= b:
#         return c, a, b
#     else:
#         return c, b, a

# valores = []  # Lista para armazenar os valores

# # loop for para obter os três valores
# for i in range(3):
#     valor = int(input(f"Digite o valor {i + 1} : "))
#     valores.append(valor)

# # Desempacota os valores retornados pela função
# ordem = ordem_crescente(*valores)

# # Imprime o resultado
# print(f'A ordem crescente dos números é: {ordem[0]}, {ordem[1]}, {ordem[2]}')

# ----------------------------------------------------------------------------------------------------------
# 3 Faça um procedimento que recebe, por parâmetro, a hora de inicio e a hora de término de um jogo, ambas subdivididas em 2 valores distintos: horas e minutos. O procedimento deve retornar, também por parâmetro, a duração do jogo em horas e minutos, considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode começar em um dia e terminar no outro.

# RESOLUCAO
# def calcular_duracao_jogo(hora_inicio, minuto_inicio, hora_termino, minuto_termino):
#     # Limitando as horas
#     if hora_inicio > 23 or hora_termino > 23 or minuto_inicio > 59 or minuto_termino > 59:
#         print("Horário inválido!")
#         return
    
#     # Convertendo tudo para minutos
#     inicio_em_minutos = hora_inicio * 60 + minuto_inicio
#     termino_em_minutos = hora_termino * 60 + minuto_termino
    
#     # Calculando a duração em minutos
#     duracao_em_minutos = termino_em_minutos - inicio_em_minutos
    
#     # Considerando jogos que começam em um dia e terminam no outro
#     if duracao_em_minutos < 0:
#         duracao_em_minutos += 24 * 60
    
#     # Convertendo a duração de volta para horas e minutos
#     duracao_horas = duracao_em_minutos // 60
#     duracao_minutos = duracao_em_minutos % 60
    
#     print(f"Duração do jogo: {duracao_horas} horas e {duracao_minutos} minutos")

# # Exemplo de uso
# hora_inicio = int(input("Digite a hora de início do jogo: "))
# minuto_inicio = int(input("Digite os minutos de início do jogo: "))
# hora_termino = int(input("Digite a hora de término do jogo: "))
# minuto_termino = int(input("Digite os minutos de término do jogo: "))

# calcular_duracao_jogo(hora_inicio, minuto_inicio, hora_termino, minuto_termino)

#CORRECAO PROFESSOR

def retorna_duracao(inicio: tuple, fim: tuple)
    diferença_horas = fim[0] - inicio[0]
    diferença_minutos = fim[1] - inicio[1]


retorna_duracao((1,4), (3,50))

#----------------------------------------------------------------------------------------------------------
# 4 Escreva um procedimento que recebes 3 valores reais X, Y e Z e que verifique se esses valores podem ser os 
# comprimentos dos lados de um triângulo e, neste caso, retornar qual o tipo de triângulo formado. Para que X, Y e Z 
# formem um triângulo é necessário que a seguinte propriedade seja satisfeita: O comprimento de cada lado de um 
# triângulo é menor do que a soma do comprimento dos outros dois lados. O procedimento deve identificar o tipo de 
# triângulo formado observando as seguintes definições:
# 	Triângulo Equilátero: os comprimentos dos 3 lados são iguais.
# 	Triângulo Isósceles: os comprimentos de 2 lados são iguais.
# 	Triângulo Escaleno: os comprimentos dos 3 lados são diferentes.

# RESOLUCAO
# def recebe_valores(x, y, z):
#     if x + y > z and x + z > y and z + y > x:
#         if x == y == z:
#             print("Triângulo equilátero.")
#         elif x == y or x == z or y == z:
#             print("Triângulo isósceles.")
#         else:
#             print("Triângulo escaleno.")
#     else:
#         print("Não é um triângulo válido!")

# x = float(input("Digite o comprimento do primeiro lado: "))
# y = float(input("Digite o comprimento do segundo lado: "))
# z = float(input("Digite o comprimento do terceiro lado: "))

# recebe_valores(x, y, z)

# ----------------------------------------------------------------------------------------------------------------------
# 5 Faça uma função que receba o número de notas e leia os valores positivos para cada uma dessas notas, e retorne a 
# média aritmética dos mesmos.

# RESOLUCAO
# def notas(b1, b2, b3, b4):
#     if b1 > 0 and b2 > 0 and b3 > 0 and b4 > 0:
#         media = (b1+b2+b3+b4) / 4
#         print(f"A sua média é {media}")
#     else:
#         print("Notas inválidas, digite apenas notas positivas.")
    
# b1 = int(input("Digite a nota do 1 bimestre: "))
# b2 = int(input("Digite a nota do 2 bimestre: "))
# b3 = int(input("Digite a nota do 3 bimestre: "))
# b4 = int(input("Digite a nota do 4 bimestre: "))

# notas(b1, b2, b3, b4)

# ----------------------------------------------------------------------------------------------------------------------
# 6 Faça uma função que receba um valor inteiro e positivo e calcula o seu fatorial (fatorial é a multiplicação entre
#  o número e todos os menores que ele até que chegue em 1, ex: 5! (a exclamação representa o fatorial) = 5*4*3*2*1).

# RESOLUCAO

# def calcular_fatorial(numero):
#     if numero < 0:
#         return "Número inválido. Deve ser inteiro e positivo."
#     elif numero == 0 or numero == 1:
#         return 1
#     else:
#         fatorial = 1
#         for i in range(2, numero + 1):
#             fatorial = fatorial * i
#         return fatorial

# numero = int(input("Digite um número inteiro e positivo: "))
# resultado = calcular_fatorial(numero)

# print(f"O fatorial de {numero} é {resultado}.")


# ----------------------------------------------------------------------------------------------------------------------
# 7 Faça um procedimento que lê 50 valores inteiros e retorna o maior e o menor deles.

# RESOLUCAO
# def encontrar_maior_menor():
#     maior = float('-inf')  
#     menor = float('inf')  

#     for i in range(5):
#         numero = int(input("Digite um número inteiro: "))
#         if numero > maior:
#             maior = numero
#         if numero < menor:
#             menor = numero

#     print(f"O maior número é: {maior}")
#     print(f"O menor número é: {menor}")

# encontrar_maior_menor()

# ----------------------------------------------------------------------------------------------------------------------
# 8 Faça uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna o número de divisores desse valor.

# RESOLUCAO
# valor = int(input("Digite um número inteiro positivo: "))

# def divisores(numero):
#     if numero < 1:
#         return "Número inválido. Deve ser um inteiro positivo."
#     contador = 0
#     for i in range(1, numero + 1):
#         if numero % i == 0:
#             contador = contador + 1
#     return contador

# resultado = divisores(valor)

# print(f"O número de divisores de {valor} é {resultado}.")

# ----------------------------------------------------------------------------------------------------------------------
# 9 Faça uma função que recebe, por parâmetro, um valor inteiro e positivo e retorna os divisores dele, numa lista.

# RESOLUCAO
# valor = int(input("Digite um número inteiro positivo: "))

# def divisores_lista(numero):
#     if numero < 1:
#         return "Número inválido. Deve ser um inteiro positivo."
#     divisores = []
#     for i in range(1, numero + 1):
#         if numero % i == 0:
#             divisores.append(i)
#     return divisores

# resultado = divisores_lista(valor)

# print(f"Os divisores de {valor} são: {resultado}.")

# ----------------------------------------------------------------------------------------------------------------------
# 10 Faça uma função que recebe um número por parametro, e retorna um booleano, indicando se ele é um número primo ou 
# não. (números primos são aqueles apenas divisiveis por 1 e por eles mesmos)

# RESOLUCAO
def primo(numero):
    if numero < 2:
        return False 
    for i in range(2, int(numero**0.5) + 1):
        if numero % i == 0:
            return False 
    return True

valor = int(input("Digite um número: "))
resultado = primo(valor)

if resultado:
    print(f"{valor} é um número primo.")
else:
    print(f"{valor} não é um número primo.")

