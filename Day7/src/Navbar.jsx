//Link component
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/cleanup">Cleanup</Link> |{" "}
      <Link to="/updater">Updater</Link>
    </nav>
  );
}

export default Navbar;
