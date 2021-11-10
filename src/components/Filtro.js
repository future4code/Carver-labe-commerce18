import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20vw;
  height: 100%;
`;

export default class Filtro extends React.Component {
  render() {
    return <ContainerFiltro>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </ContainerFiltro>;
  }
}
