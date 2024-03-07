import requests

class Endereco:
    def __init__(self, cep, numero, complemento, cidade = None , estado = None, rua = None):  
        self.cep = cep
        self.numero = numero
        self.complemento = complemento
        self.popular_campos(estado, cidade, rua)
        
    def popular_campos(self, estado, cidade, rua):
        try:
            response = requests.get("https://viacep.com.br/ws/{cep}/json/").json()
            self.estado = response['uf']
            self.cidade = response['localidade']
            self.rua = response['logradouro']
        except:
            self.estado = response['uf']
            self.cidade = response['localidade']
            self.rua = response['logradouro']
            
# end = Endereco("19880023", "33")
# print(cep.endereco)

# CHAT GPT
# import requests

# class Endereco:
#     def __init__(self, cep, numero, complemento, cidade=None, estado=None, rua=None):
#         self.cep = cep
#         self.numero = numero
#         self.complemento = complemento
#         self.cidade = cidade
#         self.estado = estado
#         self.rua = rua
#         self.popular_campos()

#     def popular_campos(self):
#         try:
#             response = requests.get(f"https://viacep.com.br/ws/{self.cep}/json/").json()
#             self.estado = response.get('uf', self.estado)
#             self.cidade = response.get('localidade', self.cidade)
#             self.rua = response.get('logradouro', self.rua)
#         except requests.exceptions.RequestException as e:
#             print(f"Erro na solicitação HTTP: {e}")

# # Exemplo de uso:
# endereco = Endereco("19880023", "33", "Apt 101", cidade="São Paulo", estado="SP", rua="Rua ABC")
# print(endereco.cep, endereco.numero, endereco.complemento, endereco.cidade, endereco.estado, endereco.rua)
