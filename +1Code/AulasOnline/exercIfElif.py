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

# valor1 = int(input("Digite o valor: "))
# valor2 = int(input("Digite o valor: "))
# valor3 = int(input("Digite o valor: "))

# if valor1 <= valor2 <= valor3:
#     print("Ordem crescente dos valores: ", valor1, valor2, valor3)
# elif valor1 <= valor3 <= valor2:
#     print("Ordem crescente dos valores: ", valor1, valor3, valor2)
# elif valor2 <= valor1 <= valor3:
#     print("Ordem crescente dos valores: ", valor2, valor1, valor3)
# elif valor2 <= valor3 <= valor1:
#     print("Ordem crescente dos valores: ", valor2, valor3, valor1)
# elif valor3 <= valor1 <= valor2:
#     print("Ordem crescente dos valores: ", valor3, valor1, valor2)
# else:
#     print("Ordem crescente dos valores: ", valor3, valor2, valor1)


# ------------------------------------------------------------------

# 4. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo  de	 uma	 pessoa,	 construa	 um	 programa	 que	
# calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
# Fórmulas:	
# - para	homens:	(72.7	*	Altura)	– 58	
# - para	mulheres:	(62.1	*	Altura)	– 44.7

# altura = float(input("Digite sua altura em metros: "))
# sexo = input("Digite seu sexo (M para masculino, F para feminino): ")

# pesoIdealMasculino = (72.7 * altura) - 58
# pesoIdealFeminino = (62.1 * altura) - 44.7

# if(sexo.upper() == "M"):
#     print("Seu peso ideal é :", pesoIdealMasculino)
# elif(sexo.upper() == "F"):
#     print("seu peso ideal é :", pesoIdealFeminino)
# else:
#     print("Sexo não encontrado.")

# ------------------------------------------------------------------

# 5. Escreva	um	programa	para	ler	o	número	de	lados	de	um	polígono	regular	
# e	a	medida	do	lado	(em	cm).	Calcular	e	imprimir	o	seguinte:	
# − Se	o	número	de	lados	for	igual	a	3	escrever	TRIÂNGULO	e	o	valor	da	área
# − Se	o	número	de	lados	for	igual	a	4	escrever	QUADRADO	e	o	valor	da sua	área.	
# − Se	o	número	de	lados	for	igual	a	5	escrever	PENTÁGONO.

# numeroDeLadosPoligono = int(input("Insira o número de lados do polígono: "))
# valorAltura = float(input("Insira a altura (em cm): "))

# areaTriangulo = (numeroDeLadosPoligono * valorAltura) / 2
# areaQuadrado = numeroDeLadosPoligono * numeroDeLadosPoligono
# areaPentagono = (5 * numeroDeLadosPoligono * valorAltura) / 2

# Triangulo = 3 
# Quadrado = 4
# Pentagono = 5

# if numeroDeLadosPoligono == Triangulo:
#     print(f"É um Triângulo e sua área é: {areaTriangulo}")
# elif numeroDeLadosPoligono == Quadrado:
#     print(f"É um Quadrado e sua área é: {areaQuadrado}")
# elif numeroDeLadosPoligono == Pentagono:
#     print(f"É um Pentagono e sua área é: {areaPentagono}")
# else:
#     print("Polígono não reconhecido.")

# ------------------------------------------------------------------

# 6. Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
# escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
# − Triângulo	Equilátero:	possui	os	3	lados	iguais.	
# − Triângulo	Isóscele:	possui	2	lados	iguais.	
# − Triângulo	Escaleno:	possui	3	lados	diferentes.

# lado1 = int(input("escreva o numero do primeiro lado: "))
# lado2 = int(input("escreva o numero do segundo lado: "))
# lado3 = int(input("escreva o numero do terceiro lado: "))

# if lado1 == lado2 and lado3:
#     print("Triangulo equilatero.")
# elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
#     print("Triângulo isósceles.")
# else:
#     print("Triângulo escaleno.")

# ------------------------------------------------------------------

# DESAFIO EXTRA
# Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)

# O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

# a. Desconto do IR;
# b. Salário Bruto ate R$900,00 (inclusive) – Isento;
# c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
# d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
# e. Salário bruto acima de 2500 – Desconto de 20%.
# Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hora é 5 e a quantidade de horas é 220.  

# Salário bruto (5 * 220): R$1100,00
# ( – ) IR (5%): R$55,00
# ( – ) INSS ( 10% ): R$110,00
# FGTS (11%): R$121,00
# Total de descontos: R$165,00
# Salário Líquido: R$935,00

valorDaHora = float(input("Digite o valor da sua hora: "))
qtdeDeHoraMes = float(input("Quantas horas trabalhou nesse mês: "))

salarioBruto = valorDaHora * qtdeDeHoraMes
impostoRenda5PorCento = (5 * salarioBruto) / 100
impostoRenda10PorCento = (10 * salarioBruto) / 100
salarioBrutoAcima2500 = (20 * salarioBruto) / 100
salarioLiquido5PorCento = salarioBruto - impostoRenda5PorCento
salarioLiquido10PorCento = salarioBruto - impostoRenda10PorCento
salarioLiquidoAcima2500 = salarioBruto - salarioBrutoAcima2500

if salarioBruto >= 900 and salarioBruto <= 1500:
    print(f" Seu Salário Bruto é de: {salarioBruto}. Desconto de 5% no imposto de renda: {impostoRenda5PorCento}. Salário lìquido: {salarioLiquido5PorCento}")
elif salarioBruto >= 1500 and salarioBruto <= 2500:
    print(f" Seu Salário Bruto é de: {salarioBruto}. Desconto de 10% no imposto de renda: {impostoRenda10PorCento}. Salário lìquido: {salarioLiquido10PorCento}")
elif salarioBruto > 2500:
    print(f" Seu Salário Bruto é de: {salarioBruto}. Desconto de 10% no imposto de renda: {salarioBrutoAcima2500}. Salário lìquido: {salarioLiquidoAcima2500}")

# ---> chatGPT

# valorDaHora = float(input("Digite o valor da sua hora: "))
# qtdeDeHoraMes = float(input("Quantas horas trabalhou nesse mês: "))

# salarioBruto = valorDaHora * qtdeDeHoraMes
# fgts = (11 * salarioBruto) / 100

# if salarioBruto <= 900:
#     impostoRenda = 0
# elif salarioBruto <= 1500:
#     impostoRenda = (5 * salarioBruto) / 100
# elif salarioBruto <= 2500:
#     impostoRenda = (10 * salarioBruto) / 100
# else:
#     impostoRenda = (20 * salarioBruto) / 100

# inss = (10 * salarioBruto) / 100
# totalDescontos = impostoRenda + inss
# salarioLiquido = salarioBruto - totalDescontos

# print(f"Salário bruto: R${salarioBruto:.2f}")
# print(f"(-) IR ({impostoRenda:.1f}%): R${impostoRenda:.2f}")
# print(f"(-) INSS (10%): R${inss:.2f}")
# print(f"FGTS (11%): R${fgts:.2f}")
# print(f"Total de descontos: R${totalDescontos:.2f}")
# print(f"Salário líquido: R${salarioLiquido:.2f}")
