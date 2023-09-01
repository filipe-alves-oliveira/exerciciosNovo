//iterar lista sem uma propriedade key gera um warning.
//O react precisa de uma chave unica em cada um dos itens iterados, p/ ajudar na renderização do componente.
//array de obj - id(chave unica)

//ultimo caso usar o index do map

import React, { useState } from 'react'

const renderizarListas = () => {
    const [list] = useState(["filipe", "fernanda", "joão"]);

    //outro exemplo com objeto prop. e valor
    const [users] = useState([
        {id: 1, name: "filipe", age: 32},
        {id: 12334, name: "joao", age: 33},
        {id: 435553, name: "jose", age: 35}
    ])

  return (
    <div>
        <ul>
            {list.map((item, index) => ( //index
                <li key={index}>{item}</li> //index - filipe fernanda joão
            ))}
        </ul>
        <ul>
            {users.map((user) => ( //nao precisa do index decima pq o objt ja tem o id 
                <li key={user.id}> 
                  {user.name} - {user.age}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default renderizarListas;