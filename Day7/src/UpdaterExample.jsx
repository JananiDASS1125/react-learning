import { useState } from "react";

function UpdaterExample() {
  const [count, setCount] = useState(0);

  function increase() {
    // updater function
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h2>Updater Function Example</h2>
      <p>Count: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default UpdaterExample;
