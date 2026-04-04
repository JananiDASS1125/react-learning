import { useRef } from "react";

function UseRefExample() {
  const inputRef = useRef();

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef Example</h2>

      <input ref={inputRef} placeholder="Type something" />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
  );
}

export default UseRefExample;
