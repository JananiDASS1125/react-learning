import useToggle from "./hooks/useToggle";

function Home() {
  const [isOn, toggle] = useToggle();

  return (
    <div>
      <h2>Home Page</h2>

      <p>Status: {isOn ? "ON" : "OFF"}</p>

      <button onClick={toggle}>
        Toggle Switch
      </button>
    </div>
  );
}

export default Home;
