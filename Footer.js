import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  width: 100%;
  background-color: #0A1172;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-family: "Courier New", Courier, monospace;
    font-size: 15px;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <ContainerFooter>
        <p>Desenvolvido pelo grupo 18</p>
        <div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="50px"
              src="https://icones.pro/wp-content/uploads/2021/02/instagram-icone-noir.png"
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="45px"
              src="https://cdn.icon-icons.com/icons2/2368/PNG/512/facebook_logo_icon_143786.png"
              alt=""
            />
          </a>
        </div>
      </ContainerFooter>
    );
  }
}
