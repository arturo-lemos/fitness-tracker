import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
}
