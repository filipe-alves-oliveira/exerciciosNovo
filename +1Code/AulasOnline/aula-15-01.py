# pesucodigo

# 1- calcule o fatorial de um número

# INICIO
# 5! = 5 * 4 * 3 * 2 * 1
# Entrada: nº inteiro qlqr
# verificar se a entrada é negativa:
#     caso sim: retornar 0
# inicializar a variavel "fatorial" com 1
# passar por cada nº da entrada até 1
#     multiplicar a variavel "fatorial" por cd numero
# retornar a variavel "fatorial"
# FIM

#codificando em python
# def fatorial(entrada: int):
#     if entrada < 0:
#         return 0
#     fatorial = 1
#     for numero in range(entrada, 1, -1):
#         fatorial = fatorial * numero
#         return fatorial
    
# print(fatorial(6))

# 2- encontre o menor numero em uma lista

# INICIO
# Entrada: lista de valores numericos
# inicializar a variavel "menor"  
# percorrer cada numero da lista                                         ordenar a lista
#     verificar se o numero é menor q o da variavel "menor"              retornar o indice 0 da lista
#         caso positivo: atribui o valor do numero para variavel menor
# exibir/retornar a variavel "menor"
# FIM

#codificando em python

import random
import time


# Solucao1 - solução mais rápida, melhor.
def menor_numero_1(lista):
    menor = lista[0]
    for numero in lista:
        if numero < menor:
            menor = numero
    return menor

# Solucao2
def menor_numero_2(lista: list):
    list.sort()
    return lista[0]

lista = [random.randint(1, 1000) for i in range(100000)]
inicio1 = time.time()
print(menor_numero_1(lista))
print("primeira:", time.time() - incio1)
inicio2 = time.time()
print(menor_numero_2(lista))
print("segunda:", time.time() - inicio2)

# 3 - João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento
# diário de seu trabalho.
# Toda vez que ele traz um peso de peixes maior que o estabelecido pelo 
# regulamento de pesca do estado de São Paulo (50 quilos)
# deve pagar uma multa de R$ 4,00 por quilo excedente.
# João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso.

# INICIO 
# Entrada: um numero representando o peso dos peixes pescados
# inicializar as variaveis "excesso" e "multa" com valor 0
# verificar se o peso dos peixes é maior que 50
#     caso positivo:
#         exibir os valor de "excesso" e "multa"
#         atribuir em "multa" o valor de "excesso" multiplicando por 4
# exibir os valores de "excesso" e "multa"
# FIM

# def multa_excesso(peso_peixes):
#     excesso, multa = 0, 0
#     if peso_peixes > 50:
#         excesso = peso_peixes -50
#         multa = excesso * 4
#     print(f"O peso dos peixes excedeu a norma em {excesso} KG")
#     print(f"A multa é de R${multa}")

# multa_excesso(60)