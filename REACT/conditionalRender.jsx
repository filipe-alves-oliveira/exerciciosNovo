//qdo imprimimos uma parte do template baseado em uma condição com if
//if ternário - condição? bloco1 : bloco2

import React from 'react'

const conditionalRender = () => {
    const[x] = useState(true);

    const [name, setName] = useState("João");

  return <div>
    <h1>Condicional Simples</h1>
    <h1>Isso será exibido??</h1>
    {x && <p>Se x for true, sim!</p>} 
    {/* é exibido, if simples apenas com && variavel concatenada com &&*/}
    {!x && <p>agora é falso.</p>}
    
    <h1>If ternário</h1>
    {/* {name === "João" ? "sim" : "não"} */} 
    {name === "João" ? (
        <div>
            <p>O nome é João.</p>
        </div>
    ) : (
        <div>
            <p>Nome não econtrado!</p>
        </div>
    )}
    {/* re-renderização do componente. */}
    <button onClick={() => setName("José")}>Clique aqui</button>
  </div>
}

export default conditionalRender