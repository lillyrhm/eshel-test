import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, } from "react-router-dom";
import Routes from '../RoutesApp';
// import Header from "../component/Header";
import Navigation from '../pages/Navigation';
import DashboardLayoutRoute from "./DashboardLayout";
import DashboardRoute from "./DashboardLayout";
import LoginPage from "./LoginPage";
import LoginLayoutRoute from "./LoginLayout";
import PageUser from "./PageUser";
import HomePage from '../pages/Home';
import AboutUs from '../pages/About';
import Account from '../pages/Account';
import Final from '../pages/Final';
import Calendar from '../pages/Calendar';
import Introduction from "../pages/Introduction";
import Commercial from '../pages/Commercial';
import NotFound from "../pages/Not";
import Contact from "../pages/Contact";

const AppExample =()=> {
    return (
      <>
        {/* <Header /> */}
        <Router>
          <Switch>
            {/* <Route exact path="/">
              <Redirect to="/LoginLayout" />
            </Route> */}
            <LoginLayoutRoute  path="/LoginLayout" component={LoginPage} />
            <DashboardRoute path="/DashboardLayout" component={PageUser} />
          </Switch>
        </Router>
      </>
    );
  }

export default AppExample;