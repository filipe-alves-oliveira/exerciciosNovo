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

# Solucao1
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

lista = [1,2,3,4,5,6,6,7,8,9,5,4,3]
print(menor_numero_1)
print(menor_numero_2)