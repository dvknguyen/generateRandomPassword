import React, { MouseEvent, useState } from "react";

function FuncComp() {
  const [count, setCount] = useState(0);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default FuncComp;
