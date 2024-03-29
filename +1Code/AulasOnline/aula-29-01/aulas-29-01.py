# .csv - O arquivo CSV (valores separados por vírgulas) é um arquivo de texto com formato específico para possibilitar o salvamento dos dados em um formato estruturado de tabela.
# -Pode ser separado por - vírgula, ponto e virgula, tab, valor1, espaço, :, =

# item;valor;estoque # cabeçalho
# caneta;2.0;50      # linhas / valores
# lapis;1.0;100      # linhas / valores

# ---------------------------------------------------------------------------------------------------

# .xml - A Extensible Markup Language (XML) (linguagem extensiva de marcação) permite definir e armazenar dados de maneira compartilhável. A XML oferece suporte ao intercâmbio de informações entre sistemas de computador, como sites, bancos de dados e aplicações de terceiros.
# -Utilizado muito para faazer nota fiscal. 
# -Utiliza muita memória pq precisa abrir e fechar a tag.
# -linguagens de marcação <tag><tag/>

# ex.: <xmlcep>
#     <rua>Assad chadi</rua>
#     <numero>33</numero>
#     <cep>19880-023</cep>
#     <bairro>centro</bairro>
# </xmlcep>

# ---------------------------------------------------------------------------------------------------

# JSON (JavaScript Object Notation) é um formato leve de troca de dados. 

# -semelhante ao dicionario de python
# O JSON é frequentemente usado para troca de dados entre sistemas, enquanto os dicionários em Python são usados para armazenar e manipular dados dentro do próprio código Python.
# ex.: 
# pessoa = {
#     "nome": "João",
#     "idade": 25,
#     "cidade": "Exemploville",
#     "casado": False,
#     "hobbies": ["leitura", "esportes", "viagens"],
#     "endereco": {
#         "rua": "Rua das Flores",
#         "numero": 123,
#         "cep": "12345-678"
#     }
# }


# # Ex.: JSON
# {
#   "nome": "João",
#   "idade": 25,
#   "cidade": "Exemploville",
#   "casado": false,
#   "hobbies": ["leitura", "esportes", "viagens"],
#   "endereco": {
#     "rua": "Rua das Flores",
#     "numero": 123,
#     "cep": "12345-678"
#   }
# }

# import json

# arquivo = open('cep.json', 'r')
# for linha in arquivo
#     print(linha)

# dicionario = json.load(arquivo)

# print(dicionario)

#Escrever

# dicionario = {
#     "data": {
#         {
#         "item": "caneta",
#          "valor": 2.0,
#          "estoque": 50
#          },
#         {
#         "item": "caneta",
#          "valor": 2.0,
#          "estoque": 50
#          },
#         {
#         "item": "caneta",
#          "valor": 2.0,
#          "estoque": 50
#          },
#     }
# }

# arquivo = open("json.json", "w")
# json.dump(dicionario, arquivo)

# arquivo = open("cep.xml", 'r', encoding="utf8")
# bs_data = BeautifulSoup(arquivo, 'xml')
# for tag in bs_data:
#     print(tag.get_text())
    
# tag = bs_data.find('cep').get_text()
# print(tag)

# ---------------------------------------------------------------------------------------
# EXERCICIOS P CASA


###### *EXERCICIOS* ######
# 1 - Lembram da lista de compras que criamos? vamos implementá-la novamente! 
# Crie um dicionário contendo uma lista de compras, sendo que cada item deve conter o nome do item, o valor unitario, e a quantidade que deve ser comprado. Após construir esse dicionário, ele deve ser escrito em um arquivo JSON de nome "lista_de_compras.json"!
# Utilize a biblioteca json do python para realizar a escrita através da função ".dump()" (lembre-se do "import json" no começo do arquivo), e a função open() para criar o arquivo!

# import json

# lista_de_compras = [
#     {
#         "item": "lapiseira",
#         "valor": 5.0,
#         "quantidade": 1
#     },
#     {
#         "item": "pincel",
#         "valor": 2.0,
#         "quantidade": 2
#     },
#     {
#         "item": "borracha",
#         "valor": 1.0,
#         "quantidade": 2
#     }
# ]

# arquivo = open("+1Code/AulasOnline/aula-29-01/lista_de_compras.json", "w")
# json.dump(lista_de_compras, arquivo)

# 2 - Agora nosso usuário foi no mercado, e comprou tudo que estava na lista! Mas esqueceu de por algumas coisas na lista! Devemos ler o arquivo criado anteriormente (utilize novamente a biblioteca json so python, com a função ".load()" dessa vez) e alterar todos os itens que estavam la anteriormente para a quantidade 0, já que já foram compradas, e deve ser adicionado na lista os seguintes itens que foram esquecidos:
# nescau, custa 10 reais, 1 unidade
# leite condensado, custa 5,50 reais, 3 unidades
# creme de leite, custa 3,40 reais, 3 unidades
 
# Após adicionados no dicionario, deve-se sobrescrever o arquivo criado anteriormente, agora com as novas quantidades dos itens anteriores, e os novos itens que foram esquecidos!

import json

arquivo = open("+1Code/AulasOnline/aula-29-01/lista_de_compras.json", "r")
lista_de_compras = json.load(arquivo)

for item in lista_de_compras:
    item["quantidade"] = 0

novos_itens = [
    {
        "item": "nescau",
        "valor": 10,
        "quantidade": 1
    },
    {
        "item": "leite condensado",
        "valor": 5.5,
        "quantidade": 3
    },
    {
        "item": "creme de leite",
        "valor": 3.40,
        "quantidade": 3
    }
]

for novo_item in novos_itens:
    if novo_item not in lista_de_compras:
        lista_de_compras.append(novo_item)

arquivo = open("+1Code/AulasOnline/aula-29-01/lista_de_compras.json", "w")
json.dump(lista_de_compras, arquivo)



