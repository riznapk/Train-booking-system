import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import classes from "./App.module.css";
import Header from "./components/Header/Header";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import TrainForm from "./components/Trains/TrainForm";
import { authActions } from "./store/auth";
import TicketDetails from "./ticketBooking/TicketDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <main className={classes.main}>
        <Switch>
          <Route path="/" exact>
            <TrainForm />
          </Route>
          <Route path='/ticketbooking/:ticketid' exact>
          <TicketDetails />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
