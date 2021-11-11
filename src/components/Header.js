import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vh;
  width: 100%;
`;

export default class Header extends React.Component {
  render() {
    return <ContainerHeader>
      <h1>Header</h1>
    </ContainerHeader>;
  }
}
