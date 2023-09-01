//utilizado para gerenciar estado
//quando a varivel nao muda o valor não re-renderiza é qdo não utiliza o useState
//sempre que re-renderiza teremos a impressão do novo valor = 25, incial = 15

import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  console.log(someData); //10

  const [number, setNumber] = useState(15); //desestruturar como array
  console.log(number); //15 - ao mudar o state(clicar no button mudar state) altera para 25

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
