# 1. Escreva um	programa que verifique a validade de uma senha fornecida	
# pelo usuário.	A senha válida é o número 1234.	Devem ser impressas	as	
# seguintes	mensagens:	
# ACESSO PERMITIDO caso	a senha	seja válida.	
# ACESSO NEGADO	caso a senha seja inválida.

# verificaSenha = input("informe sua senha: ")

# if (verificaSenha == "1234"):
#     print ("ACESSO PERMITIDO")
# else:
#     print ("ACESSO NEGADO")

# ------------------------------------------------------------------

# 2. As	maçãs custam R$ 0,30 cada se forem compradas menos do que uma	
# dúzia, e R$ 0,25 se forem	compradas pelo menos doze. Escreva um	
# programa que leia o número de maçãs compradas, calcule e escreva o	
# valor	total da compra.

# numeroMaca = int(input("informe o nº de maças compradas: "))
# MenorQueDoze = 0.30 * numeroMaca
# MaiorQueDoze = 0.25 * numeroMaca

# if (numeroMaca < 12):
#     print ("Valor da compra: R$", MenorQueDoze)
# else:
#     print ("Valor da compra: R$", MaiorQueDoze)

# ------------------------------------------------------------------

# 3. Escreva um	programa para ler 3 valores	inteiros e escrevê-los em ordem	crescente.

valor1 = int(input("Digite o valor: "))
valor2 = int(input("Digite o valor: "))
valor3 = int(input("Digite o valor: "))

if valor1 <= valor2 <= valor3:
    print("Ordem crescente dos valores: ", valor1, valor2, valor3)
elif valor1 <= valor3 <= valor2:
    print("Ordem crescente dos valores: ", valor1, valor3, valor2)
elif valor2 <= valor1 <= valor3:
    print("Ordem crescente dos valores: ", valor2, valor1, valor3)
elif valor2 <= valor3 <= valor1:
    print("Ordem crescente dos valores: ", valor2, valor3, valor1)
elif valor3 <= valor1 <= valor2:
    print("Ordem crescente dos valores: ", valor3, valor1, valor2)
else:
    print("Ordem crescente dos valores: ", valor3, valor2, valor1)
