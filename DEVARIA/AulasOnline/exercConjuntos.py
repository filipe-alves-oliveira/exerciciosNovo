# 1. Crie um script que cria uma lista com 10 nomes de pessoas e mostra na tela
nome1 = str(input("Informe o primeiro nome: "))
nome2 = str(input("Informe o primeiro nome: "))
nome3 = str(input("Informe o primeiro nome: "))
nome4 = str(input("Informe o primeiro nome: "))
nome5 = str(input("Informe o primeiro nome: "))
nome6 = str(input("Informe o primeiro nome: "))
nome7 = str(input("Informe o primeiro nome: "))
nome8 = str(input("Informe o primeiro nome: "))
nome9 = str(input("Informe o primeiro nome: "))
nome10 = str(input("Informe o primeiro nome: "))

nomes = [nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10]
print(f"Os nomes são: {nomes}")


# 2. Crie um script que cria uma lista com os numeros de 1 a 50, e mostra na tela

# 3. Utilizando os scripts anteriores, mostre agora a lista de nomes em ordem alfabetica, e a lista de numeros em ordem decrescente

# 4. Crie um script, que simula uma fila de banco, utilize uma lista, em que 10 pessoas entraram nessa fila, e as duas primeiras foram atendidas. Mostre na tela o estado atual da fila (deve estar sem os dois primeiros)

# 5. Crie uma lista, que contenha 10 alunos de uma escola em formato de dicionario. Cada aluno deve ter as informações de nome, data de nascimento e cpf

# 6. Adicione na lista do exercicio anterior, no dicionario de cada aluno, uma chave que contenha uma lista de outros objetos, referentes as notas de cada materia (3 materias para cada aluno), esse dicionario da materia deve conter o nome da materia e a nota do aluno.

# Ex de estrutura final experada:

# [
#   {
#    "Nome":"rodrigo",
#    "Nasc":"22/06/2001",
#    "Cpf":"123456789",
#   "Notas": [
#                    {
#                     "Materia":"matematica",
#                   "Nota":10.0
#                    }
#                  ]
#    }
# ]

# 7. Com a estrutura anterior pronta, remova o aluno do index 3 utilizando as funções da lista, e adicione um novo aluno (seguindo a estrutura ja pronta) no index 1 da lista

# 8. Crie uma lista com 10 números, uma lista com 5 palavras e uma lista com 3 listas dentro e cada uma delas contendo 3 numeros (uma matriz).
# Agora exiba na tela:
# - o numero na 7 posição da primeira lista
# - a ultima palavra da segunda lista
# - e o terceiro numero da segunda lista de dentro da matriz (lista de listas)

# 9. Crie um dicionario com informacoes sobre uma materia de uma escola, contendo o nome, o semestre vigente, e uma coleção contendo todos os alunos matriculados (10).
# Agora mostre na tela o primeiro aluno em ordem alfabetica, matriculado nessa materia. Crie agora um novo dicionario que contenha as informações desse aluno que você pegou anteriormente, contendo seu nome (já previamente obtido), celular, e email