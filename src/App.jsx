import Header from "./Header";
import User from "./User";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Header />

      <User name="Janani" age={21} />
      <User name="Rahul" age={25} />

      <Counter />
    </div>
  );
}

export default App;
