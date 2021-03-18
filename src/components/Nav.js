import { NavLink } from "react-router-dom";

// Nav component for the apps navigation links
const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/forest">Forest</NavLink>
        </li>
        <li>
          <NavLink to="/search/beach">Beach</NavLink>
        </li>
        <li>
          <NavLink to="/search/desert">Desert</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
