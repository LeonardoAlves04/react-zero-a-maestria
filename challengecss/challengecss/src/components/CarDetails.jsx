import React from "react";

const CarDetails = () => {
  const Cars = (carro, cor, potencia) => [
    { carro: "ferrari", potencia: "500 cavalos", cor: "preto" },
    "mustang",
    "400 cavalos",
    "azul",
    "lamborghini",
    "600 cavalos",
    "roxo",
  ];
  return (
    <div>
      <h1>Lista dos carros</h1>
      {Cars.map((car) => (
        <li>{car}</li>
      ))}
    </div>
  );
};

export default CarDetails;
