import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";

import Dashboard from "./pages/Dashboard";
import SeasonGeography from "./pages/SeasonGeography";
import BrandRetailer from "./pages/BrandRetailer";
import Order from "./pages/Order";

import OrderConfirmation from "./components/Forms/FormConfirmOrder";
import NewOrder from "./components/Forms/FormNewOrder";

function App() {
  return (
    <div className="App">
      <NavMain />
      <div className="container">
        <Switch>
          {/* new routes */}
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/dashboard/categories"
            component={SeasonGeography}
          />
          <Route exact path="/dashboard/company" component={BrandRetailer} />
          <Route exact path="/order" component={Order} />
          <Route exact path="/order/new" component={NewOrder} />
          <Route
            exact
            path="/order/confirmation"
            component={OrderConfirmation}
          />

          {/* routes to be discarded */}
          <ProtectedRoute exact path="/company" component={CompanyProfile} />

          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
