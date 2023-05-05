import React from "react";

const CarDetails = (props) => {
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {props.brand}</li>
        <li>Km:{props.km}</li>
        <li>Cor:{props.color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
