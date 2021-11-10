import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20vw;
  height: 100%;
`;

export default class Carrinho extends React.Component {
  render() {
    return <ContainerCarrinho>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
    </ContainerCarrinho>;
  }
}
