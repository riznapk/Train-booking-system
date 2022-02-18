import React from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../../store/auth";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.removeItem('isLoggedIn');
    history.push('/login');
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Train Booking System</div>
      <nav className={classes.nav}>
        <ul>
        <li>
            {isLoggedIn && <NavLink to="/" activeClassName={classes.active}>
              Book Train
            </NavLink>}
          </li>
          <li>
            <NavLink to="/contactus" activeClassName={classes.active}>
              Contact Us
            </NavLink>
          </li>
  
          <li>
            {isLoggedIn ? (
              <Link to="/login" onClick={logoutHandler}>Logout</Link>
            ) : (
              <NavLink to="/login" activeClassName={classes.active}>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
