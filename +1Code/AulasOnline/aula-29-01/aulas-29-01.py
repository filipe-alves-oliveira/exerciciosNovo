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

import json

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

