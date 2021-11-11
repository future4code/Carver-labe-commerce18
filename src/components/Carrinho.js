import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display: flex;
    
    width: 100%;
    height: 100px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5px;
`;

export default class Carrinho extends React.Component {
  render() {
    return <ContainerCarrinho>
      <p>carrinho</p>
    </ContainerCarrinho>;
  }
}
