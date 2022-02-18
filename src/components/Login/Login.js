import React, { Fragment, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";
import Card from "../../UI/Card";
import { userValidity } from "../../AppData/userData";
import { authActions } from "../../store/auth";

function Login() {
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  const loginHandler = (event) => {
    event.preventDefault();

    const username = userNameInputRef.current.value;
    const password = passwordInputRef.current.value;

    const isUserValid = userValidity(username, password);
    if (isUserValid) {
      dispatch(authActions.login());
      localStorage.setItem("isLoggedIn", "true");
      history.push("/");
    } else {
      alert("Username and  passsword is invalid");
    }
  };

  return (
    <Fragment>
      <Card>
        <form className={classes.form} onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={userNameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <div className={classes.actions}>
            <button className="btn">Login</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
}

export default Login;
