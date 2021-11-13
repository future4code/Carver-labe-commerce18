import React from "react";
import styled from "styled-components";

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vh;
  width: 100%;
  justify-content: center;
  color: white;
  background-color: #0A1172;
  align-items: center;
  * {
    font-size: 40px;
    font-family: "Courier New", Courier, monospace;
  }
`;

export default class Header extends React.Component {
  render() {
    return (
      <ContainerHeader>
       <img width="100vw" src="https://images.vexels.com/media/users/3/150030/isolated/preview/21f6aa2ebb5547cb55eab996913e3007-ilustracao-de-nave-espacial.png" alt="" />
        <h1> LabSpace </h1>


      </ContainerHeader>
    );
  }
}
