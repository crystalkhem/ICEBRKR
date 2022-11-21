import React from "react";
import { NavLink, Link } from "react-router-dom";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import "./Navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    
  };

  const name = user?`${user.firstName} ${user.lastName}`:"";

  return (
    <>
      <header className="header">
        <Link to="/" className=" header-logo">
          {/* <AccessibilityNewIcon /> */}
          ICEBRKR
        </Link>
        <nav className="header-nav">
          {user ? (
            <ul className="nav-links-list">
                <li>
                <NavLink
                  exact="true"
                  to="/dash"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  to="/event"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  to="/match"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Match Up!
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  to="/chat"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  to="/profileEdit"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  Edit Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  to="/profile"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  View Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  to="/users"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  All users
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact="true"
                  onClick={() => handleClick()} to="/login"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  LOGOUT: {name}
                </NavLink>
              </li>
            </ul>
          ) : (
            //   <div>
            //     <span>{user.email}</span>
            //     <button onClick={handleClick}>Logout</button>
            //   </div>
            <ul className="nav-links-list">
              <li>
                <NavLink
                  exact="true"
                  to="/login"
                  // activeClassName="selected-nav-link"
                  className="link nav-link"
                >
                  LOGIN
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
