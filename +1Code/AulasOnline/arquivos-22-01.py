#Calculadora

import os
import time

#usando loop infinito

# def recebe_valores():
#     a = float(input("Digite o primeiro numero: "))
#     b = float(input("Digite o segundo numero: "))
#     return a, b

# def soma(a,b):
#     return a + b
# def subtracao(a,b):
#     return a - b
# def multiplicacao(a,b):
#     return a * b
# def divisao(a,b):
#     return a / b

# while True:

#     print("""
#           ****MENU****
#           1-SOMA
#           2-SUBTRACAO
#           3-MULTIPLICACAO
#           4-DIVISAO
#           0-SAIR
#           """)
#     inp = int(input("Escolha a opção:"))

#     if inp == 1:
#         a, b = recebe_valores()
#         print("O resultado é: ", soma(a,b))
#     elif inp == 2:
#         a, b = recebe_valores()
#         print("O resultado é: ", subtracao(a,b))
#     elif inp == 3:
#         a, b = recebe_valores()
#         print("O resultado é: ", multiplicacao(a,b))
#     elif inp == 4:
#         a, b = recebe_valores()
#         print("O resultado é: ", divisao(a,b))
#     elif inp == 0:
#         break

#     time.sleep(4)     #tempo de 4 seg. dorme a aplicação.
#     # input('Digite M para voltar ao menu: ')  #digitar letra para sair
#     os.system('cls')  #limpar terminar

# ---------------------------------------------------------------------------------------------------
#usando input 

# def recebe_valores():
#     a = float(input("Digite o primeiro numero: "))
#     b = float(input("Digite o segundo numero: "))
#     return a, b

# def soma(a, b):
#     return a + b

# def subtracao(a, b):
#     return a - b

# def multiplicacao(a, b):
#     return a * b

# def divisao(a, b):
#     return a / b

# def menu():
#     print("""
#           ****MENU****
#           1-SOMA
#           2-SUBTRACAO
#           3-MULTIPLICACAO
#           4-DIVISAO
#           0-SAIR
#           """)
#     inp = int(input("Escolha a opção: "))
#     return inp 

# operacao = menu()

# while operacao != 0:
#     if operacao == 1:
#         a, b = recebe_valores()
#         print("O resultado é: ", soma(a, b))
#     elif operacao == 2:
#         a, b = recebe_valores()
#         print("O resultado é: ", subtracao(a, b))
#     elif operacao == 3:
#         a, b = recebe_valores()
#         print("O resultado é: ", multiplicacao(a, b))
#     elif operacao == 4:
#         a, b = recebe_valores()
#         print("O resultado é: ", divisao(a, b))

#     time.sleep(4)
#     os.system('cls')
#     operacao = menu()


# ---------------------------------------------------------------------------------------------------

#ARQUIVOS

#r - read - ler
#w - write - escrever
#a - append - juntar/colocar no fim

arquivo = open("texto.txt", mode="r", encoding="utf8")
lista_de_compras = []

for linha in arquivo:
    lista_de_compras.append({
        "item": linha.strip()
    })
print(lista_de_compras)

# ler arquivos e gerar uma planilha excel (CSV)

import csv

arquivo = open("texto.txt", mode="r", encoding="utf8")
lista_de_compras = []

for linha in arquivo:
    lista_de_compras.append({
        "item": linha.strip()
    })
arquivo.close()

novo_arquivo = open("texto.txt", mode="w", encoding="utf8")
novo_arquivo.write(str(lista_de_compras))
novo_arquivo.close()

arquivo_csv = open("lista.csv", mode="w", encoding="utf8")
escritor_csv = csv.DictWriter(arquivo_csv, ["item"])
escritor_csv.writeheader()
escritor_csv.writerows(lista_de_compras)


