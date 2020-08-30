import React from "react";
import styled from "@emotion/styled";

// Definimos los estilos de este componente
const P = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #fff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  font-family: "Bebas Neue", cursive;
`;

// Definimos los Props
interface IErrorProps {
  mensaje: string;
}

const Error = (props: IErrorProps) => {
  return <P>{props.mensaje}</P>;
};

export default Error;
