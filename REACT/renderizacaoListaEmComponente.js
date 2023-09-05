import React from 'react'

const renderizacaoListaEmComponente = () => {
    const cars =[
        {id: 1, marca:"vw", color: "branca", novoCarro: true, km : 0},
        {id: 2, marca:"kia", color: "azul", novoCarro: false, km : 1234},
        {id: 3, marca:"fiat", color: "preto", novoCarro: false, km : 4234}
    ]

  return (
    <div>
        {cars.map((car) => (
            <reutilizacaoComponent 
            key={car.id}
            marca={car.marca} 
            color={car.color} 
            novoCarro={car.novoCarro} 
            km={car.km} 
            />
        ))}
    </div>
  )
}

export default renderizacaoListaEmComponente


//No app.tsx onde o componente reutilizacaoComponent está sendo importado

// const reutilizacaoComponent = ({marca, km, cor, novo}) => {
//   return (
//     <div>
//         <h2>Detalhes</h2>
//         <ul>
//             <li>Marca: {marca}</li>
//             <li>km: {km}</li>
//             <li>cor: {cor}</li>
//         </ul>
//               {novo && <p>Este carro é novo</p>}
//     </div>
//   )
// }

// export default reutilizacaoComponent