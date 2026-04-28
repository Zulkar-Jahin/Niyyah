import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="navbar">Home</Link>
      <Link to="/counter"> Counter </Link>
      <Link to="/history">History</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
