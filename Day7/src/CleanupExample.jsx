import { useEffect } from "react";

function CleanupExample() {
  useEffect(() => {
    console.log("Component Mounted");

    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(interval);
      console.log("Component Unmounted - Cleanup done");
    };
  }, []);

  return <h2>Cleanup Example (Check console)</h2>;
}

export default CleanupExample;
