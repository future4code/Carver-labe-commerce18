import React from "react";
import styled from "styled-components";


const ContainerProduto = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  gap: 10px;
  align-content: flex-start;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 200px;
  height: 300px;
  align-items:center ;
`;

const listaDeProdutos = [
    {
      imagem:"https://m.media-amazon.com/images/I/51vd9tc6tNL._AC_SX425_.jpg",
      nome:"Nave Espacial Space",
      preco: 100
    },
    {
      imagem:"https://m.media-amazon.com/images/I/6145xoHIQKL._AC_SY450_.jpg",
      nome:"Cápsula Espacial",
      preco: 250
    },
    {
      imagem:"https://a-static.mlcdn.com.br/1500x1500/onibus-espacial-de-brinquedo-play-machine-onibus-espacial-multikids/magazineluiza/181166300/c8dbef63cde29d824f28e79fce3af678.jpg",
      nome:"Nave Espacial Avançada",
      preco: 150
    },
    {
      imagem:"https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1878627990",
      nome:"Kit Espacial",
      preco: 300
    },
    {
      imagem:"https://www.usecamisetas.com/media/product/4a9/camiseta-infantil-astronauta-espaco-a9b.jpg",
      nome:"Camiseta Infantil",
      preco: 60
    },
    {
      imagem:"https://img.elo7.com.br/product/zoom/267813B/camiseta-manga-longa-astronauta-baloes-herois.jpg",
      nome:"Camiseta Manga Longa",
      preco: 40
    },
    {
      imagem:"https://www.camisetas4fun.com.br/media/product/cd0/camiseta-astronauta-malabarista-5cd.jpg",
      nome:"Camiseta Infantil",
      preco: 60
    },
    {
      imagem:"https://images-americanas.b2w.io/produtos/01/00/img/3057339/2/3057339241_2GG.jpg",
      nome:"Moletom Infantil",
      preco: 80
    }
]
  


export default class Produtos extends React.Component {

  state={
    produto: listaDeProdutos,
    carrinho:[],
    adicionado: false
  } 

  adicionarCarrinho= ()=>{
    this.setState({
     adicionado: true
    })
  }

  render() {

  const listaDeComponentes = this.state.produto.map((dado) =>{
  return <Card> 
  <img src={dado.imagem} width="200px" alt=""/>
  <p>{dado.nome} </p>
  <p>{dado.preco} </p>
  <button onClick={this.adicionarCarrinho}>Adicionar ao carrinho</button>
   </Card >
})
    return (

      <ContainerProduto>
        {listaDeComponentes}
      </ContainerProduto>

    );
  }
}
