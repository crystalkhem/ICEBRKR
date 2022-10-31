import React from "react";
import { NavLink, Link } from "react-router-dom";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import "./Navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <header className="header">
        <Link to="/" className=" header-logo">
          <AccessibilityNewIcon />
          ICEBRKR
        </Link>
        <nav className="header-nav">
          {user ? (
            <ul className="list-style-reset nav-links-list">
                              <li>
                <NavLink
                  exact
                  to="/dash"
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/event"
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/match"
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Match Up!
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/login"
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  LOGIN
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/signup"
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  SIGN UP
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  onClick={() => handleClick()}
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  LOGOUT: {user.email}
                </NavLink>
              </li>
            </ul>
          ) : (
            //   <div>
            //     <span>{user.email}</span>
            //     <button onClick={handleClick}>Logout</button>
            //   </div>
            <ul>
              <li>
                <NavLink
                  exact
                  to="/login"
                  activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Log in
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
