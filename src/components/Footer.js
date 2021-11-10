import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  height: 20vh;
  width: 100%;
`;

export default class Footer extends React.Component {
  render() {
    return <ContainerFooter></ContainerFooter>;
  }
}
