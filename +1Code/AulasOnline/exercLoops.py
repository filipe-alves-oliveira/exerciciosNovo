# Lendo o vetor de 20 posições
vetor = []
for i in range(20):
    elemento = int(input(f"Digite o valor para a posição {i}: "))
    vetor.append(elemento)

# Lendo o valor x
x = int(input("Digite o valor que deseja buscar:"))

# Verificando se o valor x está no vetor
encontrado = False
posicao = -1

for i in range(len(vetor)):
    if vetor[i] == x:
        encontrado = True
        posicao = i
        break  # Encerra o loop quando o valor é encontrado

# Exibindo o resultado
if encontrado:
    print(f"O valor {x} foi encontrado na posição {posicao}.")
else:
    print(f"O valor {x} não foi encontrado no vetor.")
