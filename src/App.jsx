import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import OrderConfirmation from "./pages/OrderConfirmation";
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import NewOrder from './pages/NewOrder';


function App() {
  return (
    <div className="App">
      <NavMain />
      <div className="container">

      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/order" component={Orders} />
        <Route exact path="/order/details" component={OrderDetail} />
        <Route exact path="/order/new" component={NewOrder} />
        <Route exact path="/order/confirmation" component={OrderConfirmation} />

        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
        </div>
    </div>
  );
}

export default App;
