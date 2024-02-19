import requests

# VIA CEP viacep.com.br/ws/01001000/json/
cep = "19880-023"
retorno = requests.get("https://viacep.com.br/ws/{cep}/json/")
# print(retorno.text)
print(retorno.json())

#deck
baralho = requests.get("https://deckof..").json()
print(baralho)

id_baralho = baralho['id_baralho']

for jogador in  jogadores:
    cartas = requests.get("https://deckofcardsapi..{id_baralho}"/data/count=11)
    cartas_padrao = response_cartas['cards']
    cartas = []
    for carta in cartas_padrao:
        cartas.append(carta['code'])
    
    cartas_juntas = ','.join(cartas)
    reponse_pilha = requests.get("https://deckofcardsapi..{id_baralho}/pile/{jogador}/add/?cards={cartas_juntas}.json()
    print(response_pilhas)
           
                                 
                                 
                                 