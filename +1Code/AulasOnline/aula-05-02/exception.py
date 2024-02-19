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
# try: 
#     open('variavel', 'r')
#     a = 10/0
# except (FileNotFoundError, ZeroDivisionError):
#     print("O arquivo {variavel} não foi encontrado na etapa de leitura de Dados.")
# finally:
#     print("entrou no finally") # mande um email dizendo se deu certo ou errado ou continuar o Fluxo
    
# try:
#     tenta, se der certo vai embora, caso nao der cai no except
# except:
#     se der certo ou errado o finnaly é executado.
# finally:

###### EXERCÍCIOS ######

# - Explique a utilidade e aplicação do try-except (catch)
# Basicamente representa um tratamento de erros, que podem ocorrer durante a execução de um bloco de código, e esses erros são mapeados e tratados de acordo com seu tipo, devendo ser tratado do mais específico para o mais genérico.

# - Explique a aplicação do Finally
# O bloco finally pode ser usado em conjunto com o try-except para garantir que determinadas ações (como mandar um email dizendo se deu certo/errado ou continuar o fluxo) sejam realizadas, independentemente de ocorrer ou não uma exceção.

# - Crie um código que abre um arquivo para leitura, e caso ele não exista, crie esse arquivo escrevendo o valor "Preenchimento Padrão" dentro dele
try: 
    arquivo = open('+1Code/AulasOnline/aula-05-02/texto.txt', 'r', encoding="utf8")
    conteudo = arquivo.read()
    arquivo.close()
    print("Conteúdo do arquivo caso ele exista:", conteudo)
except FileNotFoundError:
    novo_arquivo = open('+1Code/AulasOnline/aula-05-02/texto.txt', 'w', encoding="utf8")
    novo_arquivo.write("Preenchimento Padrão")
    novo_arquivo.close()
    print("Passou por aqui e criou o texto.txt")
finally:
    print("Passou aqui!")
