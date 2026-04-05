import { useState, useEffect } from "react";

function LifecycleExample() {
  const [count, setCount] = useState(0);

  // 🔹 Mounting (runs once)
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // 🔹 Updating (runs when count changes)
  useEffect(() => {
    console.log("Component Updated - count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>Lifecycle Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default LifecycleExample;
