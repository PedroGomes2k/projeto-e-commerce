import { useState } from "react";
import { styled } from "styled-components"

export default function Item(props) {

  const [estado, setEstado] = useState(false)

  function retirarPedido() {
    setEstado(true)
  }

  if (!estado) {
    return (
      
      <ItemCarrinho>

        <img src={props.imagem}></img>

        <p>{props.nome}</p>
        <p>{props.preco}</p>

        <button onClick={() => retirarPedido()}>x</button>

      </ItemCarrinho>
    )
  }

}

const ItemCarrinho = styled.div`
border: 1px solid black;
display: flex;
margin: 10px;
padding: 10px;
justify-content: space-between;
align-items: center;

img {
  width: 50px;
  height: 50px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

strong {
  margin-bottom: 5px;
}
`;