import React from "react";

function ShowUserName(props) {
  return (
    <div>
      <h1>O nome do usuário é: {props.name}</h1>
    </div>
  );
}

export default ShowUserName;
