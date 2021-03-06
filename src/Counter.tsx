import React, { useEffect, useRef, useState } from "react";

const Counter: React.FC<{}> = () => {
  const initCount: number = 0;
  const [count, setCount] = useState<number>(initCount);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-renderd {renderTimes.current} times</div>
    </div>
  );
};

export default Counter;
