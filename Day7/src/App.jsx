import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import CleanupExample from "./CleanupExample";
import UpdaterExample from "./UpdaterExample";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cleanup" element={<CleanupExample />} />
        <Route path="/updater" element={<UpdaterExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
