import { useDispatch, useSelector } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuLink,
  MenuPopover,
} from "@reach/menu-button";
import { positionRight } from "@reach/popover";
import "@reach/menu-button/styles.css";
import { NavLink, Link, useHistory } from "react-router-dom";
import logo from "../../images/icebrkr.png";

import "./styles.css";
// import { logout } from "../../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = true //useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    // dispatch(logout());
    history.push("/");
  };

  return (
    <header className="header">
      <Link to="/" className=" header-logo">
        <img src={logo} alt="Company Logo" className="logo" />
      </Link>

      <nav className="header-nav">
        {userInfo ? (
          <ul className="list-style-reset nav-links-list">
            <li>
              <NavLink
                exact
                to="/matches"
                activeClassName="selected-nav-link"
                className="link nav-link"
              >
                Matches
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                to="/events"
                activeClassName="selected-nav-link"
                className="link nav-link"
              >
                Events
              </NavLink>
            </li>

            <li>
              <Menu>
                {({ isExpanded }) => (
                  <>
                    <MenuButton className="menu-button">
                      {/* {isExpanded ? "Close" : "Open"} <span aria-hidden="true">▾</span> */}
                      <span className="menu-text">{userInfo.name}</span>
                      <svg
                        className="menu-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </MenuButton>
                    <MenuPopover position={positionRight} className="menu-list">
                      <MenuLink
                        as={NavLink}
                        to="/account-details"
                        activeClassName="selected-nav-link menu-link-active"
                        className="menu-link"
                      >
                        Account Details
                      </MenuLink>

                      {userInfo && userInfo.isAdmin && (
                        <>
                          <MenuLink
                            as={NavLink}
                            to="/admin"
                            activeClassName="selected-nav-link menu-link-active"
                            className="menu-link"
                          >
                            Admin
                          </MenuLink>
                          <hr />
                        </>
                      )}

                      <MenuItem
                        className="menu-link menu-link-logout"
                        onSelect={() => logoutHandler()}
                      >
                        Logout
                      </MenuItem>
                    </MenuPopover>
                  </>
                )}
              </Menu>
            </li>
          </ul>
        ) : (
          <ul className="list-style-reset nav-links-list">
            <li>
              <NavLink
                exact
                to="/login"
                activeClassName="selected-nav-link"
                className="link nav-link"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
