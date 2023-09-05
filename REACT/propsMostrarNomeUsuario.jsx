import React from 'react'

const propsMostrarNomeUsuario = (props) => {
  return (
    <div>
        {/* extraindo o dado da props */}
        <h2>o nome do usuario: {props.name}</h2>

    </div>
  )
}

export default propsMostrarNomeUsuario


//No app.tsx onde o componente propsMostrarNomeUsuario está sendo iimportado
// <propsMostrarNomeUsuario name="Filipe" /> 
// o componente propsMostrarNomeUsuario tem acesso a uma prop chamada name com o valor de Filipe.


// OU PODE SER ASSIM COM VARIAVEL
// const name = filipe
// <propsMostrarNomeUsuario name={name} />


//OU COM STATE
// const [userName] = useState("maria")
// <propsMostrarNomeUsuario name={userName} />