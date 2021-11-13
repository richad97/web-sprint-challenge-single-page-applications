import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import Home from "./Pages/Home";
import OrderForm from "./Pages/OrderForm";
import Confirmation from "./Pages/Confirmation";
import NotFound from "./Pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <div id="logo-container">
          <Link to="/">Lambda Eats</Link>
        </div>
        <div id="link-container">
          <Link to="/">Home</Link>
          <Link id="order-pizza" to="/pizza">
            Order
          </Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={OrderForm} />
        <Route path="/confirmation/:data" component={Confirmation} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default App;
