# 1) Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. 
# A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que
#  está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis. 

# A = 10
# B = 20

# A, B = B, A

# print("O valor de A agora é:", A)
# print("O valor de B agora é:", B)

# 2) Analise os algoritmos abaixo e diga o que será impresso na tela ao serem executados (sem executá-los!): 
# 1) ```python
#     a = 10
#     b = 20 
#     print(b)
#     b = 5
#     print(a, b)
#     ```

# Resposta: print(b) - 20
# print(a, b) - 10, 5


# 2) ```python
#     a = 30
#     b = 20
#     c = a + b
#     print(c)
#     b = 10
#     print(b, c)
#     c = a + b 
#     print(a, b, c)
#     ```

# Resposta: print(c) - 50
# print(b, c) - 10, 50
# print(a, b, c) - 30, 10, 40


# 3) ```python
#     a = 10
#     b = 20
#     c = a // c = 10
#     b = c // b = 10
#     a = b // a = 10
#     print(a, b, c)
#     ```

# Resposta: print(a, b, c) - 10, 10, 10


# 4) ```python
#     a = 10
#     b = a + 1 //11
#     a = b + 1 //12
#     b = a + 1 //13
#     print(a)
#     a = b + 1 //14
#     print(a, b)
#     ```

# Resposta: print(a) - 12
# print(a, b) - 14, 13


# 5) ```python
#     a = 10
#     b = 5
#     c = a + b //15
#     b = 20 
#     a = 10
#     print(a, b, c)
#     ```

# Resposta: print(a, b, c) - 10, 20, 15


# 6) ```python
#     x = 1 
#     y = 2
#     z = y - x //1
#     print(z)
#     x = 5
#     y = x + z //6
#     print(x, y, z)
#     ```

# Resposta: print(z) - 1
# print(x, y, z) - 5, 6, 1

# ### 3) Reescreva as instruções abaixo com o mínimo de parênteses possível, mas sem alterar o resultado:
# - a = 6*(3+2) = 30          -> a = 6 * 3 + 2
# -  b = (6/3)+(8/2)          -> b = 6/3 + 8/2
# -  c = 2+(6*(3+2))          -> c = 2 + 6 * (3 + 2)
# -  d = ((3+(8/2))*4)+(3*2)  -> d = (3 + 8/2) * 4 + 3 * 2
# -  e = 2+(3*6)/(2+4)        -> e = 2 + 3 * 6 / (2 + 4)
# -  f = (6*(3*3)+6)-10       -> f = 6 * 3 * 3 + 6 - 10
# -  g = 2*(8/(3+1))          -> g = 2 * 8 / (3 + 1)
# - h = (((10*8)+3)*9)        -> h = h = (10 * 8 + 3) * 9
# -  i = 3+(16-2)/(2*(9-2))   -> i = 3 + (16 - 2) / (2 * (9 - 2))
# -  j = ((-12)*(-4))+(3*(-4))-> j = -12 * -4 + 3 * -4

# 4) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, 
#nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

TotalEleitores = int(input("Informe numero de eleitores: "))
Brancos = int(input("Informe numero de votos brancos: "))
Nulos = int(input("Informe numero de votos nulos: "))
Nulos = int(input("Informe numero de votos válidos: "))

print(f"Em relação ao Total de eleitores, o numero de votos brancos é de: {Brancos*100/TotalEleitores}%, de votos nulos é de: {Nulos*100/TotalEleitores}% e numero de votos validos é de: {(Brancos-Nulos)-TotalEleitores}%.")
