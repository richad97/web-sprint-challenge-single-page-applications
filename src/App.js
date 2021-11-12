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
      <p>You can remove this code and create your own header</p>

      <Link to="/">Home</Link>
      <Link to="/order">Order</Link>
      <Link to="/confirmation">Confirmation</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={OrderForm} />
        <Route path="/confirmation" component={Confirmation} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};
export default App;
