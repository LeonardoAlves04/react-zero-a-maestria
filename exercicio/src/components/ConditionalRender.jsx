import React, { useState } from "react";

function ConditionalRender() {
  const [name, setName] = useState("Fi do Bil");

  return (
    <div>
      {name === "Leonardo" ? (
        <div>
          <p>O nome é Leonardo </p>
        </div>
      ) : (
        <p>Nome do caboclo não encontrado</p>
      )}
      <button onClick={() => setName("Leonardo")}>MUDAR NOME</button>
    </div>
  );
}

export default ConditionalRender;
