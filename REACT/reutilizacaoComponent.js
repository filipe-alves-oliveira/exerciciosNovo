//ex.: se temos os dados de 1000 carros, podemos reaproveitar o nosso carDetails 1000 vezes.


import React from 'react'

const reutilizacaoComponent = ({marca, km, cor, novo}) => {
    return (
      <div>
          <h2>Detalhes</h2>
          <ul>
              <li>Marca: {marca}</li>
              <li>km: {km}</li>
              <li>cor: {cor}</li>
          </ul>
                {novo && <p>Este carro é novo</p>}
      </div>
    )
  }

export default reutilizacaoComponent

//No app.tsx onde o componente reutilizacaoComponent está sendo importado
// <reutilizacaoComponent marca="Ford" cor="verde" km={0} novo={true} />  //String passa entre "" e numero entre {}
// <reutilizacaoComponent marca="Fiat" cor="branco" km={5000} novo={false} />

//No caso fiz o reaproveitamento de componente implementando apenas o novo e mostrando na tela caso for true.