//perimte pegar o dado em seu valor original dentro de um set de dado.
//utilizado para modificar listas pois temos o valor antigo e trasnformamos em um novo valor.
//primeiro argumento de set sempre será o previous state.

import React, { useState } from 'react'

const previousState = () => {
    const [list] = useState(["filipe", "fernanda", "joão"]);

    //outro exemplo com objeto prop. e valor
    const [users, setUsers] = useState([
        {id: 1, name: "filipe", age: 32},
        {id: 2, name: "joao", age: 33},
        {id: 3, name: "jose", age: 35}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {  //prev+nome do estate = prevUsers
            console.log(prevUsers); // modifica a lista deixando até 0. 
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

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
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default previousState; 