import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const ContainerProduto = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  gap: 10px;
  align-content: flex-start;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default class Produtos extends React.Component {
  render() {
    return (
      <ContainerProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
      </ContainerProduto>
    );
  }
}
