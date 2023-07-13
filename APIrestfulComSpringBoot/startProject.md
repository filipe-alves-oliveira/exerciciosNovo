Lucas Angelo - O que é API RESTFul, Spring Boot e MVC (Apresentando o Projeto)

--> o que é API Restful? 

É UMA PONTE ENTRE O CLIENTE(BROWSER DE UMA APP FRONT OU ATÉ UMA API/SISTEMA) E O SERVIDOR DO BD.

client ---(get, post)---> Rest Api ---> BD
Client <---(Json/XML)---- Rest Api <--- BD

API - se comunica com o browser pelas msgs HTTP, get(buscar dados), put(atualizar), post(criar), delete(deletar)
Existe 2 tps de msg - Request(usuario do navegador faz, script q o dev front fez para chamar a API) e Response(Apiretorna).

Rest - acronimo de REpresentation State Transfer, descrigo em 6 regras:
- uniform interface: formatos, tipo de request e response uniforme.
- stateless: nao guarda nenhum estado nenhum da requisicao (se um site pediu uma req de um usuario, nao guardo o dado).
- cacheable: possivel armazenar cache.
- cliente-server: arquitetura utilizada com padrao rest(client browser(index.html) servidor - API)
- code on Demand: (opciaonl).

RESTFul - utilizado para descrever APIs HTTP que adotam padrào REST(cobre as 6 regras do Rest).


--> Sring Boot? 

Framework Open Source, serve para faciltar o desenvolvimento, abstrai e facilita config de servers, gerencia aplicacoes e config de libs. Pode ser feita de forma programatica via anotaçoes (@lombok, @overrided, @entity..)

--> MVC? 

- interacao/interface: view. 
- Manipulacao de Dados, camada de negocio: Model.
- Camada de controle: Controller.

Isola a regra de negocio, o novo modelo nao muda a apresentacao, so o modelo e nem o controller, tendo mais flexibilidade e reuso das classes.

Model, view, Controllers: qdo o browser faz um request HTTP, na API, cai no controller, fazendo a request por meio da view.
O Request chama o model(ex.: modelo de usuario), gera demanda para -> Model. 
O Model volta os dados, envia para a view(tipo html) e o js processa o html e apresenta pro usuário.

Request --> Controller --> Model --> gera View --> usuário.

Modelo esta sendo muito utilizado pq pode ter reuso, se adiciona um novo campo ao usuario, eu nao preciso alterar a forma q o usuario faz o request, nao preciso atualizar o app pra consumir dado novo, cai no controller q nao mudo nada, só muda dados, trazendo seguranca. Posso criar versoes novas com varias coisas novas, posso criar outro controler q consome o mesmo modelo, reutilizando o modelo com controller novo.

