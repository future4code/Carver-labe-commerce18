import React from "react";
import styled from "styled-components";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import Header from "./components/Header";
import Footer from "./components/Footer";


const ConstainerPrincipal = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 200vh;
`;


const ContainerCentral = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;



export default class App extends React.Component {


  render() {


    return (


      <ConstainerPrincipal>
        <Header/>

        <ContainerCentral>
          <Filtro></Filtro>

          <Produtos>

          </Produtos>

          <Carrinho></Carrinho>
        </ContainerCentral>

        <Footer/>
      </ConstainerPrincipal>
    );
  }
}
