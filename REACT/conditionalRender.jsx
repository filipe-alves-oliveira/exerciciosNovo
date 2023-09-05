//qdo imprimimos uma parte do template baseado em uma condição com if

import React from 'react'

const conditionalRender = () => {
    const[x] = useState(true);

  return <div>
    <h1>Isso será exibido??</h1>
    {x && <p>Se x for true, sim!</p>} 
    {/* é exibido, if simples apenas com && variavel concatenada com &&*/}
    {!x && <p>agora é falso.</p>}
  </div>
}

export default conditionalRender