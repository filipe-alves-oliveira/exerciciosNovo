# Fluxo de exception - classe q basicamente representa o tipo de erro.

#pode ter um try sem except, mas não pode ter except sem try

# ex.: 
# print(10/0) #ZeroDivisionError: division by zero - fiho do arithmeticError, exception da matematica.

# open('arquivo.txt', 'r') #FileNotFoundError: [Errno 2] No such file or directory: 'arquivo.txt', filho do IOError

#Arvore de excessões - quem é filho de quem.
# ex.: base exception -> exception -> arithmeticError -> EnviromentError -> EOFError -> LookupError -> ValueError(valor nulo).. - todos esses erros são classes.

#sempre tratar do mais especifico para o mais genérico.

# Ex.:
# teste = ""
# teste = []
# teste.capitalize()
# AttributeError: 'list' object has no attribute 'capitalize' - filho do ValueError

#null pointer(ponteiro) java, apontando para um lugar q não tem nada na memória.
# aponta para nada
# ex.: ref.split()

# tratamento
# try/exception em outras linguagens try/catch

# # ex.:
# def funcao():
#     #mandar um e-mail, executar outra parte do código
#     pass
# variavel = "arquivo.txt"

# try:
#     open(variavel, 'r')
# except:
#     open(variavel, 'W')
#     print("Esse arquivo não existe", variavel)
#     funcao()

# Ex.:
# try: #pega o erro q ocorre primeiro
#     open('variavel', 'r')
#     a = 10/0
# except FileNotFoundError:
#     print("O arquivo {variavel} não foi encontrado na etapa de leitura de Dados.")
# except ZeroDivisionError:
#     print("Deu ruim a divisão por zeros.")
    
# Ex.: tratando varios erros como um só
try: 
    open('variavel', 'r')
    a = 10/0
except (FileNotFoundError, ZeroDivisionError):
    print("O arquivo {variavel} não foi encontrado na etapa de leitura de Dados.")
finally:
    print("entrou no finally") # mande um email dizendo se deu certo ou errado ou continuar o Fluxo
    
# try:
#     tenta, se der certo vai embora, caso nao der cai no except
# except:
#     se der certo ou errado o finnaly é executado.
# finally:
    