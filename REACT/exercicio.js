import React from 'react'

const exercicio = () => {

    const person = [
        {id: 1, nome: "maria", idade: 32, profissao: "adm"},
        {id: 2, nome: "cida", idade: 32, profissao: "bancaria"},
        {id: 3, nome: "julia", idade: 30, profissao: "arquiteta"}
    ]

  return (
    <div>
        <ul>
        {person.map((persona) => (
            <li key={persona.id}>
                {persona.nome} - {persona.idade} - {persona.profissao}
            </li>
            ))}
        </ul>
        <p>{person.idade >= 18 ? "pode tirar habilitação" : "não pode tirar habilitação"}</p>
    </div>
  )
}

export default exercicio



//No app.tsx onde o componente childrenProp está sendo importado

{/* <Exercicio /> */}