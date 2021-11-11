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
  height: 100%;
  margin: 20px;
  padding: 10px;
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
        <Header/>

        <ContainerCentral>
          <Filtro></Filtro>

          <Carrinho></Carrinho>

          <Produtos>

          </Produtos>          
        </ContainerCentral>

        <Footer/>
      </ConstainerPrincipal>
    );
  }
}
