import { useState, useEffect } from "react";

function EffectExample() {
  const [count, setCount] = useState(0);

  // runs when component loads + when count changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>useEffect Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default EffectExample;
