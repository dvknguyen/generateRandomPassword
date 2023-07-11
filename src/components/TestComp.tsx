import react, { useState, MouseEvent } from "react";

function TestComp() {
  const [count, setCount] = useState(1);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };
  return (
    <div>
      <p>testCpmt value is: {count}</p>
      <button onClick={handleClick}>Click me also for test</button>
    </div>
  );
}

export default TestComp;
