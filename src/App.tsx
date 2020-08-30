import React from "react";
import styled from "@emotion/styled";
// Importación de imágenes
import img from "./cryptomonedas.png";
// Importación de componentes
import Formulario from "./components/Formulario";

// Definimos los estilos de este componente
const Div = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const H1 = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  return (
    <Div>
      <div>
        <Img src={img} alt="imagen crypto" />
      </div>
      <div>
        <H1>Cotiza Cryptomonedas al instante</H1>
        <Formulario />
      </div>
    </Div>
  );
}

export default App;
