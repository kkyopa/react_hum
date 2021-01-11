import React, { useState } from "react";

const Counter: React.FC<{}> = () => {
  const initCount: number = 0;
  const [count, setCount] = useState<number>(initCount);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>value: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
