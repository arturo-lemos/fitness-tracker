import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect home after logout
  };

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
