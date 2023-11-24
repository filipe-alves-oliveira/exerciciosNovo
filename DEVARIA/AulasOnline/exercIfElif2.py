# 1. Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano e ou não bissexto
# obs:Para ser bissexto, o ano deve ser:
# Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero; e
# Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero; ou
# Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.

    # ano = int(input("Digite o ano: "))

    # verificaAno = (ano % 4 == 0) and (ano % 100 != 0 or ano % 400 == 0)

    # if verificaAno:
    #     print("O", ano, "é bissexto!")
    # else:
    #     print("O ano não é bissexto!")

# ------------------------------------------------------------------

# 2.As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  

# a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
# b. Salários até R$ 280,00 (incluindo): aumento de 20%;
# c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
# d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
# e. Salários de R$ 1500,00 em diante: aumento de 5%
# Após o aumento ser realizado, informe na tela;

# a. O salário antes do reajuste;
# b. O percentual de aumento aplicado;
# c. O valor do aumento;
# d. O novo salário, após o aumento.  

# salarioAtual = int(input("Digite seu salário atual: "))

# salario20Porcento = 0.2 * salarioAtual
# salario15PorCento = 0.15 * salarioAtual
# salario10PorCento = 0.10 * salarioAtual
# salario5PorCento = 0.05 * salarioAtual

# if salarioAtual <= 280:
#     print(f"O salário antes do reajuste é de R$ {salarioAtual}. O percentual de aumento foi de 20%. O valor do aumento foi de R${salario20Porcento}. Seu novo Salário é de R$ {salarioAtual + salario20Porcento}")
# elif salarioAtual >= 280 and salarioAtual <= 700:
#     print(f"O salário antes do reajuste é de R$ {salarioAtual}. O percentual de aumento foi de 15%. O valor do aumento foi de R${salario15PorCento}. Seu novo Salário é de R$ {salarioAtual + salario15PorCento}")    
# elif salarioAtual >= 700 and salarioAtual <= 1500:
#     print(f"O salário antes do reajuste é de R$ {salarioAtual}. O percentual de aumento foi de 10%. O valor do aumento foi de R${salario10PorCento}. Seu novo Salário é de R$ {salarioAtual + salario10PorCento}") 
# else:
#     print(f"O salário antes do reajuste é de R$ {salarioAtual}. O percentual de aumento foi de 5%. O valor do aumento foi de R${salario5PorCento}. Seu novo Salário é de R$ {salarioAtual + salario5PorCento}") 


# ------------------------------------------------------------------

# 3.Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido)

# diaDaSemana = int(input("Digite o numero: "))

# if diaDaSemana == 1:
#     print("Domingo")
# elif diaDaSemana == 2:
#     print("Segunda-feira")
# elif diaDaSemana == 3:
#     print("Terça-feira")
# elif diaDaSemana == 4:
#     print("Quarta-feira")
# elif diaDaSemana == 5:
#     print("Quinta-feira")
# elif diaDaSemana == 6:
#     print("Sexta-feira")
# elif diaDaSemana == 7:
#     print("Sábado")
# else:
#     print("valor inválido")

# ------------------------------------------------------------------

# 4.Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar, realize o cálculo desejado (assim como a calculadora que fizemos em aula). Em seguida utilize o resultado dessa operação e determine e exiba na tela o resultado e se ele é:

# Par ou ímpar;
# Positivo ou negativo;

# numero1 = float(input("Digite o numero: "))
# numero2 = float(input("Digite o numero: "))
# operacao = str(input("qual operação deseja realizar: "))

# multiplicacao = (numero1 * numero2)
# divisao = (numero1 / numero2)
# soma = (numero1 + numero2)
# subtracao = (numero1 - numero2)

# if multiplicacao >= 0 and multiplicacao % 2 == 0:
#     print(f"O resultado é: {multiplicacao} e o numero é positivo e par")
# elif multiplicacao >= 0 and multiplicacao % 2 != 0:
#     print(f"O resultado é: {multiplicacao} e o numero positivo e impar")
# elif multiplicacao <= 0 and multiplicacao % 2 != 0:
#     print(f"O resultado é: {multiplicacao} e o numero negativo e impar")
# elif multiplicacao <= 0 and multiplicacao % 2 == 0:
#     print(f"O resultado é: {multiplicacao} e o numero negativo e par")
# elif divisao >= 0 and divisao % 2 == 0:
#     print(f"O resultado é: {divisao} e o numero positivo e par")
# elif divisao >= 0 and divisao % 2 != 0:
#     print(f"O resultado é: {divisao} e o numero positivo e impar")
# elif divisao <= 0 and divisao % 2 != 0:
#     print(f"O resultado é: {divisao} e o numero negativo e impar")
# elif divisao <= 0 and divisao % 2 == 0:
#     print(f"O resultado é: {divisao} e o numero negativo e par")
# elif soma >= 0 and soma % 2 == 0:
#     print(f"O resultado é: {soma} e o numero positivo e par")
# elif soma >= 0 and soma % 2 != 0:
#     print(f"O resultado é: {soma} e o numero positivo e impar")
# elif soma <= 0 and soma % 2 != 0:
#     print(f"O resultado é: {soma} e o numero negativo e impar")
# elif soma <= 0 and soma % 2 == 0:
#     print(f"O resultado é: {soma} e o numero negativo e par")
# elif subtracao >= 0 and subtracao % 2 == 0:
#     print(f"O resultado é: {subtracao} e o numero positivo e par")
# elif subtracao >= 0 and subtracao % 2 != 0:
#     print(f"O resultado é: {subtracao} e o numero positivo e impar")
# elif subtracao <= 0 and subtracao % 2 != 0:
#     print(f"O resultado é: {subtracao} e o numero negativo e impar")
# elif subtracao <= 0 and subtracao % 2 == 0:
#     print(f"O resultado é: {subtracao} e o numero negativo e par")
# else:
#     print("valor inválido!")

# >>>>>>> CHAT
# numero1 = float(input("Digite o primeiro número: "))
# numero2 = float(input("Digite o segundo número: "))
# operacao = input("Qual operação deseja realizar (+, -, *, /): ")

# if operacao == '+':
#     resultado = numero1 + numero2
# elif operacao == '-':
#     resultado = numero1 - numero2
# elif operacao == '*':
#     resultado = numero1 * numero2
# elif operacao == '/':
#     resultado = numero1 / numero2
# else:
#     print("Operação inválida!")
#     exit()

# # Verifica se o resultado é par ou ímpar
# if resultado % 2 == 0:
#     par_impar = "par"
# else:
#     par_impar = "ímpar"

# # Verifica se o resultado é positivo ou negativo
# if resultado >= 0:
#     pos_neg = "positivo"
# else:
#     pos_neg = "negativo"

# print(f"O resultado é: {resultado} e o número é {pos_neg} e {par_impar}.")


# ------------------------------------------------------------------

# 5. Faça um programa que faça 5 perguntas de sim ou não para uma pessoa sobre um crime. As perguntas são:

# “Telefonou para a vítima? “
# “Esteve no local do crime?”
# “Mora perto da vítima? “
# “Devia para a vítima? “
# “Já trabalhou com a vítima? “
# O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como “Suspeita”, entre 3 e 4 como “Cúmplice” e 5 como “Assassino“. Caso contrário, ele será classificado como “Inocente“.  

# pergunta1 = str(input("Telefonou para a vítima? "))
# pergunta2 = str(input("Esteve no local do crime? "))
# pergunta3 = str(input("Mora perto da vítima? "))
# pergunta4 = str(input("Devia para a vítima? "))
# pergunta5 = str(input("Já trabalhou com a vítima? "))

# if pergunta1 and pergunta2 and pergunta3 and pergunta4 and pergunta5 == "sim":
#     print("Assasino!")
# elif pergunta1 and pergunta2 and pergunta3 and pergunta4 == "sim":
#     print("Cúmplice!")
# elif pergunta1 and pergunta2 == "sim":
#     print("Suspeita!")
# else:
#     print("Não participou do crime!")

# >>>>>>> CHAT
# pergunta1 = str(input("Telefonou para a vítima? "))
# pergunta2 = str(input("Esteve no local do crime? "))
# pergunta3 = str(input("Mora perto da vítima? "))
# pergunta4 = str(input("Devia para a vítima? "))
# pergunta5 = str(input("Já trabalhou com a vítima? "))

# # Conta o número de respostas "sim"
# contagem_sim = 0

# if pergunta1.lower() == "sim":
#     contagem_sim += 1
# if pergunta2.lower() == "sim":
#     contagem_sim += 1
# if pergunta3.lower() == "sim":
#     contagem_sim += 1
# if pergunta4.lower() == "sim":
#     contagem_sim += 1
# if pergunta5.lower() == "sim":
#     contagem_sim += 1

# # Classifica a participação
# if contagem_sim == 5:
#     print("Assassino!")
# elif contagem_sim >= 3:
#     print("Cúmplice!")
# elif contagem_sim == 2:
#     print("Suspeita!")
# else:
#     print("Inocente!")



# ------------------------------------------------------------------

# DESAFIO

# Receber do usuario o peso dele em kg, a altura dele em metros (usar numero decimal) e o sexo biologico ('M' ou 'F') e com isso calcule o IMC segundo essa tabela:

# Mulher                    Homem                 Grau
# <19                          <20            Magreza
# entre 19 e 23,9       entre 20 e 24,9       Normal
# entre 24 e 28,9       entre 25 e 29,9       Obesidade leve
# entre 29 e 38,9       entre 30 e 39,9       Obesidade moderada
# acima de 39           acima de 40           Obesidade mórbida

# *obs: formula para o imc é: peso dividido pela altura ao quadrado

idade = int(input("Informe sua idade: "))
peso = float(input("Informe seu peso: "))
altura = float(input("Informe sua altura: "))
sexo = input("Informe seu sexo (M ou F): ")

imc = peso / (altura * altura)

# Mulher
if sexo.lower() == 'f':
    if idade < 19:
        print(f"Seu IMC é: {imc:.2f} Magreza")
    elif 19 <= idade <= 23.9:
        print(f"Seu IMC é: {imc:.2f} Normal")
    elif 24 <= idade <= 28.9:
        print(f"Seu IMC é: {imc:.2f} Obesidade leve")
    elif 29 <= idade <= 38.9:
        print(f"Seu IMC é: {imc:.2f} Obesidade moderada")
    elif idade > 39:
        print(f"Seu IMC é: {imc:.2f} Obesidade mórbida")

# Homem
elif sexo.lower() == 'm':
    if 29 <= idade <= 38.9:
        print(f"Seu IMC é: {imc:.2f} Obesidade moderada")
    elif idade > 39:
        print(f"Seu IMC é: {imc:.2f} Obesidade mórbida")

# Adicionei uma mensagem para o caso de sexo não reconhecido ou idade fora das faixas especificadas
else:
    print("Erro: Sexo não reconhecido ou idade fora das faixas especificadas.")



