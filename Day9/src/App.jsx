import { useState } from "react";
import LifecycleExample from "./LifecycleExample";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>React Lifecycle Demo</h1>

      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show && <LifecycleExample />}
    </div>
  );
}

export default App;
