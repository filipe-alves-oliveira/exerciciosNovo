## Instruções dos exercícios:
#### Serão separados em salas individuais, ao entrar, compartilhe a tela na qual você resolverá os exercicios. Pegue esse arquivo, abra a pasta na qual ele se encontra no visual studio code, clique nele, e aperte "ctrl+shift+v" para exibir formatado. Crie um arquivo novo "resolucoes.py" e resolva os exercicios lá, apontando qual o número do exercício:

```python
  #1 
  resolucao = 123
  #2.1
  #resposta
  #2.2
  #...
```

#### Observe que para exercícios que possuem item, é necessário indicar o item atual "2.1", e para exercícios que pedem respostas em texto, colocar como comentário no arquivo

### Bons exercícios!
---

### 1) Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis. 

### 2) Analise os algoritmos abaixo e diga o que será impresso na tela ao serem executados (sem executá-los!): 

1) ```python
    a = 10
    b = 20 
    print(b)
    b = 5
    print(a, b)
    ```

2) ```python
    a = 30
    b = 20
    c = a + b
    print(c)
    b = 10
    print(b, c)
    c = a + b 
    print(a, b, c)
    ```

3) ```python
    a = 10
    b = 20
    c = a
    b = c 
    a = b 
    print(a, b, c)
    ```

4) ```python
    a = 10
    b = a + 1
    a = b + 1
    b = a + 1
    print(a)
    a = b + 1
    print(a, b)
    ```

5) ```python
    a = 10
    b = 5
    c = a + b 
    b = 20
    a = 10
    print(a, b, c)
    ```

6) ```python
    x = 1 
    y = 2
    z = y - x 
    print(z)
    x = 5
    y = x + z 
    print(x, y, z)
    ```

### 3) Reescreva as instruções abaixo com o mínimo de parênteses possível, mas sem alterar o resultado:
- a = 6*(3+2) 
-  b = (6/3)+(8/2)
-  c = 2+(6*(3+2)) 
-  d = ((3+(8/2))*4)+(3*2)
-  e = 2+(3*6)/(2+4) 
-  f = (6*(3*3)+6)-10
-  g = 2*(8/(3+1)) 
- h = (((10*8)+3)*9)
-  i = 3+(16-2)/(2*(9-2)) 
-  j = ((-12)*(-4))+(3*(-4))

### 4) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.


### 5) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

### 6) Para o enunciado a seguir foi elaborado um algoritmo que *contém erros*, identifique os erros no algoritmo apresentado abaixo:
  - Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
    e mostre seu peso ideal, utilizando as seguintes fórmulas:
    - para sexo masculino: peso ideal = (72.7 * altura) - 58
    - para sexo feminino: peso ideal = (62.1 * altura) - 44.7
    
  ```python
    nome = input("Escreva seu nome: ")
    sexo = int(input("Escreva seu sexo (M ou F): "))
  
    if sexo == 'M'
    peso_ideal = (72.7 * altura) - 58
    else:
      peso_ideal == (62.1 * altura) – 44.7

    pritn(peso_ideal)
  ```

### 7) Interprete o seguinte algoritmo, e decifre (sem executá-lo) quais serão os valores resultantes nas variaveis "z" e "resposta", para cada caso de entrada de valores:
  ```python
    x = input()
    y = input()
    z = (x*y) + 5
    if z <= 0:
      resposta = 'A'
    else:
      if z <= 100:
        resposta = 'B'
      else:
        resposta = 'C'
    print(z, resposta)
  ```
#### Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:

  x   | y   | z   | resposta
  --- | --- | --- | --- 
  3   | 2   |     |
  150 | 3   |     |
  7   | -1  |     |
  -2  | 5   |     |
  50  | 3   |     |

### 8) Para A = V, B = V e C = F, qual o resultado da avaliação das seguintes expressões:

- (A and B) or (A or B)
- (A or B) and (A e C)
- A or C and B or A and not B 
- A and B and C or A and B and not C

### 9) Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10). 

### 10) Escreva um algoritmo que leia um valor, que representará quantas notas o usuario irá inserir em seguida, então receba o tanto de notas referente ao valor recebido anteriormente, por fim calcule e escreva na tela a média aritmética desses valores lidos.

### **DESAFIO**  Dado o seguinte vetor:
Vetor 'v':
  index|valor   
  ---|---
  1|5
  2|1
  3|4
  4|2
  5|7
  6|8
  7|3
  8|6

#### Qual será o conteúdo do vetor V depois de executado o algoritmo abaixo?

```python
  for i in range(8, 5, -1):
    aux = v[i]
    v[i] = v[8 - i + 1]
    v[8 - i + 1] = aux
  v[3] = v[1]
  v[v[3]] = v[v[2]]
```
 
