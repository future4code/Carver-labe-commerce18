import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 50%;
  height: 100px;
  justify-content:space-between;
  flex-wrap: wrap;
  margin: 5px;
  border: 1px solid black;
  height: 100vh;
`;

const ContainerFiltro = styled.div`
border:1px solid black;
width:50%;
margin: 0 5px;
`;

export default class Filtro extends React.Component {
  render() {
    return (
      <Div>
      <ContainerFiltro>
        <h3>filtro</h3>
      </ContainerFiltro>
      </Div>
    );
  }
}
