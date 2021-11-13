import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  flex-wrap: wrap;
  border:1px solid black;
  margin: 5px;
  height:100vh;
`;

const ContainerCarrinho = styled.div`
border:1px solid black;
width:50%;
margin: 0 5px;
`;

export default class Carrinho extends React.Component {
  render() {
    return (
      <Div>
      <ContainerCarrinho>
        <h3>carrinho</h3>
      </ContainerCarrinho>
      </Div>
    );
  }
}
