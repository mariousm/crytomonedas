import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
// Importación de imágenes
import img from "./cryptomonedas.png";
// Importación de componentes
import Formulario from "./components/Formulario";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner/Spinner";

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
  // Definimos el state
  const [moneda, guardarMoneda] = useState<string>("");
  const [cripto, guardarCriptoMoneda] = useState<string>("");
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState<boolean>(false);

  // Método que se ejecuta cuando se carga el componente, y cada vez que cambie el state de moneda y cripto
  useEffect(() => {
    const consultarCriptoMoneda = async () => {
      // Evitamos la ejecución la primera vez
      if (moneda === "") return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      const respuesta = await axios.get(url);

      // Mostramos el spinner
      guardarCargando(true);

      // ocultamos el spinner
      setTimeout(() => {
        guardarCargando(false);
        guardarResultado(respuesta.data.DISPLAY[cripto][moneda]);
      }, 3000);
    };
    consultarCriptoMoneda();
  }, [moneda, cripto]);

  return (
    <Div>
      <div>
        <Img src={img} alt="imagen crypto" />
      </div>
      <div>
        <H1>Cotiza Cryptomonedas al instante</H1>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptoMoneda={guardarCriptoMoneda}
        />
        {!cargando ? <Cotizacion resultado={resultado} /> : <Spinner />}
      </div>
    </Div>
  );
}

export default App;
