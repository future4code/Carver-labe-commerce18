import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const ContainerProduto = styled.div`
  display: grid;
  grid-template-columns: repeat( 4, 1fr);
  grid-template-rows: repeat( 3, 1fr);
  width: 100%;
  height: 100%;
  border: 1px solid black;
  gap: 10px;

`;

export default class Produtos extends React.Component {
  render() {
    return <ContainerProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
        <CardProduto></CardProduto>
    </ContainerProduto>;
  }
}
