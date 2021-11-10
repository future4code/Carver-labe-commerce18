import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
  height: 100%;

`;

export default class CardProduto extends React.Component {
  render() {
    return (
    <Card>
      <p>NOME</p>
    </Card>
    )
  }
}
