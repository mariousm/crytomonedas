import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
// Importación de custom hooks
import useMoneda from "../hooks/useMoneda";
import useCriptomonedas from "../hooks/useCriptomonedas";
// Importacion de componentes
import Error from "./Error";

// Definimos los estilos de este componente
const Input = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

// Definimos la interfaz de los props
interface IFromularioProps {
  guardarMoneda: Function;
  guardarCriptoMoneda: Function;
}

const Formulario = ({
  guardarMoneda,
  guardarCriptoMoneda,
}: IFromularioProps) => {
  // State del listado de criptomonedas
  const [lstCripto, guardarCripto] = useState([]);
  const [error, guardarError] = useState<boolean>(false);

  // Arreglo con las monedas
  const MONEDAS = [
    { codigo: "USD", nombre: "Dólar" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra" },
  ];

  // Extraemos los valores de useMoneda
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);
  // Extramos los valore de useCriptomoneda
  const [cripto, SelectCripto] = useCriptomonedas(
    "Elige tu criptomoneda",
    "",
    lstCripto
  );

  // Ejecutamos el useEffect cuando se cargar el componente, es decir, solo la primera vez
  useEffect(() => {
    const consultarAPI = async () => {
      const url: string =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta: any = await axios.get(url);
      guardarCripto(respuesta.data.Data);
    };
    consultarAPI();
  }, []);

  // Método que se ejecuta cuando pulsamos el input Calcular
  const cotizarMoneda = (e: any) => {
    e.preventDefault();

    // Comprobar si los campos están llenos
    if (moneda === "" || cripto === "") {
      guardarError(true);
      return;
    }

    // Pasamos los datos al componente APP
    guardarMoneda(moneda);
    guardarCriptoMoneda(cripto);
    guardarError(false);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Input type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
