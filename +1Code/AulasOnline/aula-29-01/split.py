arquivo = open('+1Code/AulasOnline/aula-29-01/texto.txt', 'r', encoding="utf8")
itens = []
for linha in arquivo:
    nova_linha = linha.strip()
    dados_separados = nova_linha.split(' ')
    dicionario = {
        "item": dados_separados[0],
        "valor": dados_separados[1],
        "estoque": dados_separados[2],
    }
    itens.append(dicionario)
    
print(itens)

# texto = "xxxxxxxxWWWWWWWWWWWiiiiiiiiiamcsocmsomcsomoa"
# separado_a = texto.split('a')
# print(separado_a)