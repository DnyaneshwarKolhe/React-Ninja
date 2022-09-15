import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The DOJO Blog</h1>
      <div className="links">
        <Link to="/" className="home">DOJO Home</Link>
        <Link to="/create" className="new-blog">New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;