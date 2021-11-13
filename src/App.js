import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import Home from "./Pages/Home";
import OrderForm from "./Pages/OrderForm";
import Confirmation from "./Pages/Confirmation";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      <Link to="/">Home</Link>
      <Link id="order-pizza" to="/pizza">
        Order
      </Link>

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
