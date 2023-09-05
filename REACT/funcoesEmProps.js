//as funcoes podem ser passadas para props
//cria no componente pai e envia como prop p o componente
//no componente filho pode ser ativada por um evento

import React from 'react'

const funcoesEmProps = ({minhaFuncao}) => {
  return (
    <div>
        {/* minhafuncao sem os (), pq quero que executa apenas quando clicar, com os () executa ao carregar o codigo. */}
        <button onClick={minhaFuncao}> 
            clique aqui para executar a funcao.
        </button>
    </div>
  )
}

export default funcoesEmProps



//No app.tsx onde o componente funcoesEmProps está sendo importado

// function exibirMensagem() {
//     console.log("Evento do componente Pai");
// }

//<funcoesEmProps minhaFuncao={exibirMensagem} />

