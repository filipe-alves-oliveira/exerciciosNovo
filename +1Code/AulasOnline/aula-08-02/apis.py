import requests

# VIA CEP viacep.com.br/ws/01001000/json/
# cep = "19807610"
# retorno = requests.get(f"https://viacep.com.br/ws/{cep}/json/")
# print(retorno.json()) # {'cep': '19807-610', 'logradouro': 'Rua São Carlos', 'complemento': '', 'bairro': 'Vila Progresso', 'localidade': 'Assis', 'uf': 'SP', 'ibge': '3504008', 'gia': '1892', 'ddd': '18', 'siafi': '6179'}

# https - protocolo
# ://viacep.com.br - dominio
# /ws - path (rota)
# /19807619/json/ - paths variable (caminhos)

# https://google.com/search?q=maca$sca_esv=976...
# Depois do ponto de ? para frente é chamado de query parameters, informações opcionais
# tudo q tiver entr um & comercial e outro são parametros separados.
# semelhante ao json chave e valor (q=maca$sca)

#DECKS - baralho de cartas - https://www.deckofcardsapi.com/

# lista de jogadores
# jogadores = ["Rodrigo", "Pedro", "Brian", "Milena"]

# baralho = requests.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2").json()
# # print(baralho) #{'success': True, 'deck_id': '45kf3ruykopx', 'remaining': 104, 'shuffled': True}

# id_baralho = baralho['deck_id']
# # print(id_baralho) #45kf3ruykopx

# for jogador in jogadores:
#     response_cartas = requests.get(f"https://www.deckofcardsapi.com/api/deck/{id_baralho}/draw/?count=11").json()
#     cartas_padrao = response_cartas['cards']
#     cartas = []
#     for carta in cartas_padrao:
#         cartas.append(carta['code'])
    
#     cartas_juntas = ','.join(cartas)
#     response_pilha = requests.get(f"https://www.deckofcardsapi.com/api/deck/{id_baralho}/pile/{jogador}/add/?cards={cartas_juntas}").json()
#     print(response_pilha)

#     pilha_rodrigo = requests.get(f"https://www.deckofcardsapi.com/api/deck/{id_baralho}/pile/{'Rodrigo'}/list/").json()


# CURRENCY - https://currencyapi.com/
# api_key = "cur_live_JpOS..."
# cotacao = requests.get(f"https://api.currencyapi.com/v3/latest?apikey={api_key}&currencies=BRL").json()
# print(cotacao)

# Exercicio
# Entrar no site: https://publicapis.dev/category/all
# e escolher na lista duas APIs que mais te interessem, uma sem autenticação, e uma que use API Key, utilize o filtro "Auth" presente no site para filtrar cada uma delas!
# Após escolher, consuma e exiba os dados em um script python, de cada uma dessas APIs!

#sem autenticação

#api_key
# api_key = "YVFIG6pRda0e9cbf314c6c866ebfae5fb75fa1869eWuLk57As"
# geo_ip = requests.get(f"https://ipgeo.proweblook.com/?ip=192.168.100.45&api_key={api_key}").json()
# print(geo_ip)
           
# api_key = "YVFIG6pRda0e9cbf314c6c866ebfae5fb75fa1869eWuLk57As"
# phone = requests.get(f"https://phoneapi.proweblook.com/?number=5518991373128&api_key={api_key}").json()
# print(phone) #{'status': True, 'number': '+5518991373128', 'national_format': '(18) 99137-3128', 'name': 'Vivo Telefonica (06)', 'type': 'mobile', 'mcc': '724', 'mnc': '06'}               

#Auth
geo_ip = requests.get(f"https://v2.jokeapi.dev/joke/Programming,Misc?format=xml&blacklistFlags=nsfw,sexist&type=single&lang=ru&amount=2")
print(geo_ip)
