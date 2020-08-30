import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

// Definimos los estilos del hook para el formulario
const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCriptomonedas = (
  label: string,
  stateInicial: string,
  opciones: Array<any>
): [
  string,
  () => JSX.Element,
  React.Dispatch<React.SetStateAction<string>>
] => {
  // Definimos el state
  const [state, actualizarState] = useState<string>(stateInicial);

  const SelectCripto = () => {
    return (
      <Fragment>
        <Label>{label}</Label>
        <Select
          onChange={(e: any) => actualizarState(e.target.value)}
          value={state}
        >
          <option value="">-- Seleccione --</option>
          {opciones.map((opcion) => {
            return (
              <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                {opcion.CoinInfo.FullName}
              </option>
            );
          })}
        </Select>
      </Fragment>
    );
  };

  return [state, SelectCripto, actualizarState];
};

export default useCriptomonedas;
