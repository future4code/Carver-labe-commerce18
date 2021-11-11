import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 200px;
  height: 300px;
`;

export default class CardProduto extends React.Component {
  render() {
    return (
      <Card>
        <img
          width="200px"
          src="https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg"
          alt=""
        />
        <p>NOME</p>
        <p>PREÇO</p>
      </Card>
    );
  }
}
