//qdo um component precisa ter jsx dentro dele
//esse jsx vem do component pai
//funciona como um container, abraçando os elementos.
//children é uma prop do componente.

import React from 'react'

const childrenProp = ({ children, value }) => {
  return (
    <div>
         <p>Este é o titulo do container</p>
         {children}
         <p>o valor é: {value}</p>
    </div>
  )
}

export default childrenProp




//No app.tsx onde o componente childrenProp está sendo importado
//abertura e fechamento  diferente 
//     <ChildrenProp value="teste"> 
//         <p>e este é o conteudo</p>
//     <childrenProp/>  