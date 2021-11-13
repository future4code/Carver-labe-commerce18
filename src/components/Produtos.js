import React from "react";
import styled from "styled-components";

// CSS da página

const ContainerProduto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
  align-content: flex-start;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  /* background-color: #2832C1; */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 335px;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 0 0.5em blue;
  background-color: white;
  border-radius: 15px;
  p {
    font-weight: bold;
    font-size: 15px;
    font-family: "Courier New", Courier, monospace;
  }
`;

const ContainerFiltro = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
  align-items: center;
  justify-content: space-around
`;

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 5px;
  align-items: center;
  border: 1px solid black;
`;

// Carrinho fake
// export default class App extends React.Component{
//   state = {
//     carrinho: [],
//     produtos: produtos,
//     pagina: true
//   }

  // Funções para trocar de página 
  // paginaCarrinho = () => {
  //   this.setState({pagina: !this.state.pagina})
  // }

//Descrição dos produtos

const listaDeProdutos = [
  {
    id:1,
    imagem: "https://m.media-amazon.com/images/I/51vd9tc6tNL._AC_SX425_.jpg",
    nome: "Nave Espacial Space",
    preco: 100.00
  },
  { 
    id: 2,
    imagem: "https://m.media-amazon.com/images/I/6145xoHIQKL._AC_SY450_.jpg",
    nome: "Cápsula Espacial",
    preco: 250.00
  },
  { 
    id: 3,
    imagem: "https://a-static.mlcdn.com.br/1500x1500/onibus-espacial-de-brinquedo-play-machine-onibus-espacial-multikids/magazineluiza/181166300/c8dbef63cde29d824f28e79fce3af678.jpg",
    nome: "Nave Espacial Avançada",
    preco: 150.00
  },
  { 
    id: 4,
    imagem:"https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1878627990",
    nome: "Kit Espacial",
    preco: 300.00
  },
  { 
    id: 5,
    imagem: "https://www.usecamisetas.com/media/product/4a9/camiseta-infantil-astronauta-espaco-a9b.jpg",
    nome: "Camiseta Infantil",
    preco: 60.00
  },
  // { 
  //   id: 6,
  //   imagem: "https://img.elo7.com.br/product/zoom/267813B/camiseta-manga-longa-astronauta-baloes-herois.jpg",
  //   nome: "Camiseta Manga Longa",
  //   preco: 40.00
  // },
  // { 
  //   id: 7,
  //   imagem: "https://www.camisetas4fun.com.br/media/product/cd0/camiseta-astronauta-malabarista-5cd.jpg",
  //   nome: "Camiseta Infantil",
  //   preco: 60.00
  // },
  // { 
  //   id: 8,
  //   imagem: "https://images-americanas.b2w.io/produtos/01/00/img/3057339/2/3057339241_2GG.jpg",
  //   nome: "Moletom Infantil",
  //   preco: 80.00
  // },
  // { 
  //   id: 9,
  //   imagem: "https://a-static.mlcdn.com.br/1500x1500/onibus-espacial-de-brinquedo-play-machine-onibus-espacial-multikids/magazineluiza/181166300/c8dbef63cde29d824f28e79fce3af678.jpg",
  //   nome: "Nave Espacial Avançada",
  //   preco: 150.00
  // },
  // { 
  //   id: 10,
  //   imagem: "https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1878627990",
  //   nome: "Kit Espacial",
  //   preco: 300.00
  // },
  // { 
  //   id: 11,
  //   imagem: "https://www.usecamisetas.com/media/product/4a9/camiseta-infantil-astronauta-espaco-a9b.jpg",
  //   nome: "Camiseta Infantil",
  //   preco: 60.00
  // },
  // { 
  //   id: 12,
  //   imagem: "https://img.elo7.com.br/product/zoom/267813B/camiseta-manga-longa-astronauta-baloes-herois.jpg",
  //   nome: "Camiseta Manga Longa",
  //   preco: 40.00
  // },
];

// Filtros

export default class Produtos extends React.Component {
  state = {
    produto: listaDeProdutos,
    carrinho: [],
    preco: 0,
    busca : "",
    valorMin: "",
    valorMax: ""
  };

//CARRINHO

  adicionarCarrinho =(id)=>{
    const produto = listaDeProdutos.filter((produto)=>{
          return produto.id === id
        })
        console.log(produto)

    const novoCarrinho = [...this.state.carrinho, produto[0]]

    this.setState({
      carrinho: novoCarrinho
    })
  }

  /* adicionarCarrinho= (event) =>{
    this.setState({
      adicionado: Number(event.target.value) +1
    });
  }; */

  atualizarBusca=(event)=>{
    this.setState({
      busca: event.target.value
    })
  }

  atualizarValorMin=(event)=>{
    this.setState({
      valorMin: event.target.value
    })
  }

  atualizarValorMax=(event)=>{
    this.setState({
      valorMax: event.target.value
    })
  }

//Botões

  render() {
    return (
      <ContainerProduto>

        <ContainerFiltro>
        
        <input
          placeholder="pesquisa"
          value={this.state.busca}
          onChange={this.atualizarBusca} 
        />
        
        <input
          type="number" 
          placeholder="Valor Minimo"
          value={this.state.valorMin}
          onChange={this.atualizarValorMin} 
        />

        <input
          type="number"
          placeholder="Valor Maximo"
          value={this.state.valorMax}
          onChange={this.atualizarValorMax} 
        />
        

        </ContainerFiltro>
        {this.state.produto
        .filter((produto)=>{
          return produto.nome.toLowerCase().includes(this.state.busca.toLowerCase())
        })
        .filter((produto)=>{
          return this.state.valorMin === "" || produto.preco >= this.state.valorMin
        })
        .filter((produto)=>{
          return this.state.valorMax === "" || produto.preco <= this.state.valorMax
        })
        .map((produto) => {
          return (
            <Card>
              <img src={produto.imagem} width="200px" alt="" />
              <p>{produto.nome} </p>
              <p>preço : {produto.preco},00 </p>
{/* BOTÃO CARRINHO */}
              <button onClick={()=>this.adicionarCarrinho(produto.id)} >
                Adicionar ao carrinho
              </button>
            </Card>
          );
        })}   
        
        
        <ContainerCarrinho>
          <img src = "https://image.flaticon.com/icons/png/512/1255/1255247.png" width="50px" alt = "carrinho de compras"/>
        
          {this.state.carrinho.map((produto)=>{
            return <div>
            <p>{produto.nome},preço: {produto.preco}</p>
            
            </div>
          })}
        
        </ContainerCarrinho>
      </ContainerProduto>
    );
  }
}
