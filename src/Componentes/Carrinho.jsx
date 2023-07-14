import { styled } from "styled-components"
import Item from "./Item";


export default function Carrinho() {
    
    return (
        <ContainerCarrinho>
            <Item></Item>


        </ContainerCarrinho>
        

    )
}

const ContainerCarrinho = styled.div`
border: 1px solid black;
width: 400px;
height: 100vh;
position: absolute;
right: 0;
`;
