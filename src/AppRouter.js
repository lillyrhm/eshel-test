import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './component/sidebar/Sidebar';
import Layout from "./layout/layout";
import {
      Login,
      Logout,
      AboutUs,
      Account,
      CalendarPage,
      Commercial,
      ContactUs,
      Event, Final,
      HomePage,
      Introduction,
      NotFound,
      NumberSubmit
} from './pages/index';
import numberSubmit from "./pages/Login/NumberSubmit.js";


export default function AppRouter() {
      
      const checkIsLoggedIn = () => {
            const isLoggedIn= !!localStorage.getItem("token")
            if(!isLoggedIn){
                  console.log("go to login page")
            }
      }

// localStorage.setItem("token",tokenValue)

      useEffect(() => {
            checkIsLoggedIn()
      }, [])

      return (
            <BrowserRouter>
                  <Layout>
                        <Navbar />
                        <Switch>
                              <Route exact path="/login" component={Login} />
                              <Route exact path="/number-submit" component={() => <NumberSubmit authorized={false} />} />
                              <Route exact path="/" component={HomePage} />
                              <Route exact path="/account" component={Account} />
                              <Route exact path="/final" component={Final} />
                              <Route exact path="/calendar-data" component={CalendarPage} />
                              <Route exact path="/note" component={Event} />
                              <Route exact path="/introduction" component={Introduction} />
                              <Route exact path="/commercial" component={Commercial} />
                              <Route exact path="/about-us" component={AboutUs} />
                              <Route exact path="/contact-us" component={ContactUs} />
                              <Route exact path="/Logout" component={Logout} />
                              {/* <Route exact path="not-fond" component={Not} /> */}
                        </Switch>
                  </Layout>
            </BrowserRouter>
      );
}