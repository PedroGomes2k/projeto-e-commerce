import { styled } from "styled-components";
import produtos from "../produtos";
import Produto from "./Produto";

export default function Lista() {
    return (
        <ContainerLista>
            {produtos.map((c) =>
             <Produto 
             key={c.id}
             nome={c.nome}
             preco={c.preco}
             imagem={c.imagem}
             /> 
            )}
           

        </ContainerLista>
    )
}


const ContainerLista = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
