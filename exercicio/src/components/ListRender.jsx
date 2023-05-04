import { useState } from "react";

const ListRender = () => {
  const [name] = useState(["Leo", "Mateus", "Maria", "Ana", "Pedro", "Paulo"]);

  return (
    <div>
      <ul>
        {name.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
