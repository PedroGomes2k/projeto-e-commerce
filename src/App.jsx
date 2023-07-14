import { styled } from "styled-components"
import Lista from "./Componentes/Lista";
import Carrinho from "./Componentes/Carrinho";

export default function App() {

  return (

    
    <ContainerApp>
      <Lista/>
      <Carrinho/>
    </ContainerApp>

    
  )
}

const ContainerApp = styled.div`
display: flex;
align-items: flex-start;
position: relative;
padding-right: 400px;
`;







