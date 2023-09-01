//renderizar listas de dados no template
//dados tipo array
//utiliza metodo map(JS) e podemos inserir jsx em cada iteração.


import React, { useState } from 'react'

const renderizarListas = () => {
    const [list] = useState(["filipe", "fernanda", "joão"]);

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li> //filipe fernanda joão
            ))}
            {/* {list.map((item) => {...})} a continuação da funcao é com () da forma acima no jsx nao com chaves como no map.  */}
        </ul>
    </div>
  )
}

export default renderizarListas;