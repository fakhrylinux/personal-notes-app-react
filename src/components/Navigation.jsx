import { Link } from "react-router";

function Navigation() {
  return (
    <header className="head_bar">
      <nav className="topnav">
        <Link to="/">
          <h1 className="head_bar__title">Notes App</h1>
        </Link>
        <ul id="links">
          <li>
            <Link to="/notes/new">Add Note</Link>
          </li>
          <li>
            <Link to="/archive">Archive</Link>
          </li>
        </ul>
        <a id="mobile-menu" className="icon">
          <i className="fa fa-bars"></i>
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
