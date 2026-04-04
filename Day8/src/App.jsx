import { UserContext } from "./UserContext";
import Child from "./Child";
import UseRefExample from "./UseRefExample";

function App() {
  const userName = "Janani";

  return (
    <UserContext.Provider value={userName}>
      <h1>React Hooks Practice</h1>

      <Child />
      <UseRefExample />
    </UserContext.Provider>
  );
}

export default App;
