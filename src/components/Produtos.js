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
  
const listaDeComponentes = listaDeProdutos.map((dado) =>{
  return <Card > 
  <img src={dado.imagem} width="200px" alt=""/>
  <p>{dado.nome} </p>
  <p>{dado.preco} </p>
   </Card >
})

export default class Produtos extends React.Component {

  render() {

    return (
      <ContainerProduto>
      {listaDeComponentes}
      </ContainerProduto>
    );
  }
}
