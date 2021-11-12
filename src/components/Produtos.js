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
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
    },
    {
      imagem:"https://a-static.mlcdn.com.br/618x463/foguete-de-brinquedo-astronautas-exploradores-do-espaco-fun/magazineluiza/226746100/c12e51c59ba5af98cf23b27c6f9ea930.jpg",
      nome:"nave de brinquedo",
      preco: 100
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
