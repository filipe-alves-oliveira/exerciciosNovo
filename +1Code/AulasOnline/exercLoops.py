## Leia um vetor de 20 posições e em seguida um valor X qualquer.
# Seu programa devera fazer uma busca do valor de X no vetor lido e
# informar a posição em que foi encontrado ou se não foi encontrado.

# numeros = 0
# valores = []
# valorx = 0

# while numeros < 20:
#     valores.append(float(input(f'Posição {numeros+1}: ')))
#     numeros +=1

# print(valores)

# valorx = float(input(f"Insira um valor: "))
# print(valorx)
# print(valores.index(valorx))


# ---------------------------------------------------------------

# Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que possuírem valores negativos.

numeros = 0
valores = []


while numeros < 5:
    valores.append(float(input(f'Posição {numeros+1}: ')))
    numeros +=1

print(valores)


for numero in valores:
     if numero < 0:
        # numero = 0     
        print(numero)
        valores[valores.index(numero)] = 0
print(valores)
