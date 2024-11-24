import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

const handleIncrement = () => {
    setCount(count + 1);
};

const handleDecrement = () => {
    setCount(count - 1);
};

const handleReset = () => {
    setCount(0);
};


return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;