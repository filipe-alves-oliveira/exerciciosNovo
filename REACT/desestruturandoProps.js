//desestruturar as props que chegam como recurso de destructuring
//ex.: se temos 2 props (name e age) - podemos fazer assim: My component({name, age})
//nao necessita usar props.algumaCoisa.

const desestruturandoProps = ({marca, km, cor}) => {
  return (
    <div>
        <h2>Detalhes</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>km: {km}</li>
            <li>cor: {cor}</li>
        </ul>
    </div>
  )
}

export default desestruturandoProps

//No app.tsx onde o componente desestruturandoProps está sendo importado
// <desestruturandoProps marca="Vw" km={1029120} cor="Azul" />  //String passa entre "" e numero entre {}
// o componente desestruturandoProps tem acesso a uma prop chamada name com o valor de Filipe.