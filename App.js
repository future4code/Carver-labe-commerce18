import React from "react";
import styled from "styled-components";
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ConstainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
  /* background-color: #0A1172; */
`;

const ContainerCentral = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default class App extends React.Component {
  render() {
    return (
      <ConstainerPrincipal>
        <Header />

        <ContainerCentral>
          <Produtos />
        </ContainerCentral>

        <Footer />
      </ConstainerPrincipal>
    );
  }
}
