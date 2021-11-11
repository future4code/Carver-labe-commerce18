import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
`;

export default class Filtro extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <p>filtro</p>
      </ContainerFiltro>
    );
  }
}
