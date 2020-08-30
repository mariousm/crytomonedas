import React from "react";
import styled from "@emotion/styled";
// Importación de custom hook
import useMoneda from "../hooks/useMoneda";

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

const Formulario = () => {
    // Arreglo con las monedas
    const MONEDAS = [
        {codigo: 'USD', nombre:'Dólar'},
        {codigo: 'EUR', nombre:'Euro'},
        {codigo: 'GBP', nombre:'Libra'},
    ]

  // Extraemos los valores de useMoneda
  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);

  return (
    <form>
      <SelectMonedas />
      <Input type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
