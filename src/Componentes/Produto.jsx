import { useState } from "react";
import { styled } from "styled-components"


export default function Produto({ imagem, nome, preco,carrinho}) {
    const [produto, setProduto] = useState([])
    
   

    function produtoSelecionado(i) {
        const item = [...produto, i]
        setProduto(item)
        carrinho = produto
        console.log(carrinho)
    }
   
   
    return (
        <ItemProduto>
            <img src={imagem} alt="imagem-produto"></img>
            <div>
                <p>{nome}</p>
                <p>{preco}</p>
            </div>
            <button onClick={() => produtoSelecionado({ imagem, nome, preco })}>Comprar</button>
        </ItemProduto>
    )
}

const ItemProduto = styled.div`
    border: 1px solid black;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;

    img {
    width: 200px;
    height: 200px;
    }

    div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    }
`;