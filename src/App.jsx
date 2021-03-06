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
import OrderForms from "./pages/OrderForms";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";



const theme = createMuiTheme({
  typography: {
    fontFamily: ["Open Sans"].join("."),
  },
  palette: {
    primary: {
      main: "#252A36",
    },
    secondary: {
      light: "#EEDBDD",
      main: "#DAABB0",
      dark: "#64323E",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    
      <div className="App">
        <NavMain />
        <div className="container">
          <Switch>
            {/* new routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
            <ProtectedRoute
              exact
              path="/dashboard/categories/:index"
              component={SeasonGeography}
            />
            <ProtectedRoute
              exact
              path="/dashboard/company"
              component={BrandRetailer}
            />
            <ProtectedRoute exact path="/order/new" component={NewOrder} />
            <ProtectedRoute
              exact
              path="/order/edit/:id"
              component={OrderForms}
            />
            <ProtectedRoute exact path="/order/:id" component={Order} />
            <ProtectedRoute
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
      
    </ThemeProvider>
  );
}

export default App;
