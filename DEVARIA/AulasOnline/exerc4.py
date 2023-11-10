# 1. Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano e ou não bissexto
# obs:Para ser bissexto, o ano deve ser:
# Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero; e
# Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero; ou
# Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.

ano = int(input("Digite o ano: "))

verificaAno = (ano % 4 == 0) and (ano % 100 != 0 or ano % 400 == 0)

if verificaAno:
    print("O", ano, "é bissexto!")
else:
    print("O ano não é bissexto!")

# ------------------------------------------------------------------

