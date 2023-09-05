//quando um valor é elevado do componente filho para o componente pai.
//geralmente temos um componente q usa o state e outro q altera, então precisamos passar a alteração para o pai e este
//passa para o componente q usa o state.


import React from 'react'

const stateLift = ({msg}) => {
  return (
    <div>a mensagem é: {msg}</div>
  )
}

export default stateLift



//No app.tsx onde o componente stateLift está sendo importado, componente pai tem a funcao e deseja-se passar para o filho 

// const [message, setMessage] = useState("")

// const lidandoComMensagem = (msg) => {
//     setMessage(msg);
// }

// <stateLift msg={message}/>
// <changeMessageState lidandoComMensagem={lidandoComMensagem}/>



// //criado componente que é o que vai trocar a mensagem. changeMessageState.js

// import React from 'react'

// const changeMessageState = ({lidandoComMensagem}) => {
//     const messages = ["oi", "olá", "hello"]

//   return (
//     <div>
//         <button onClick={() => lidandoComMensagem(messages[0])}> 1 </button>
//         <button onClick={() => lidandoComMensagem(messages[1])}> 2 </button>
//         <button onClick={() => lidandoComMensagem(messages[2])}> 3 </button>
//     </div>
//   )
// }

// export default changeMessageState
