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

# CURRENCY

           
                                 
                                 
                                 