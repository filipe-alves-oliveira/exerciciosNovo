// <></>, deixa o componente mais simples

import React from 'react'

const fragment = ({propFragment}) => {
  return (
    <>
        <h2>Primeiro titulo</h2>
        <h3>segundo titulo</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default fragment


//No app.tsx onde o componente fragment está sendo importado
// <Fragment propFragment="teste" />