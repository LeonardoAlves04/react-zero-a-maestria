import React, { useState } from "react";

function ConditionalRender() {
  const [name, setName] = useState("Leonardo");

  return (
    <div>
      {name === "Fi do Bil" ? (
        <div>
          <p>O nome é Fi do Bil </p>
        </div>
      ) : (
        <p>Nome do caboclo não encontrado</p>
      )}
      <button onClick={() => setName("Fi do Bil")}>MUDAR NOME</button>
    </div>
  );
}

export default ConditionalRender;
