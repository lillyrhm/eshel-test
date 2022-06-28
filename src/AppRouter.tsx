import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './component/sidebar/Sidebar';
import Layout from "./layout/layout";
import {
      Login,
      NumberSubmit,
      Policy,
      HomePage,
      New,
      OnGoing,
      RouleBookBank,
      AboutUs,
      Account,
      CalendarPage,
      Commercial,
      ContactUs,
      Event,
      Final,
      Introduction,
      Logout,
} from './pages/index';
import PriveteRoute from "./utils/PriveteRoute";
import PublicRoute from "./utils/PublicRoute";


export default function AppRouter(): JSX.Element {
      const [user, setUser] = useState([]);



      // const checkIsLoggedIn = () => {
      //       const isLoggedIn = !!localStorage.getItem("token")
      //       if (!isLoggedIn) {
      //             // authorized(true)
      //             console.log("go to login page")
      //             return {
      //                   component: <Redirect to={'/'} />
      //             }
      //       }
      // }

      // localStorage.setItem("token",tokenValue)

      // useEffect(() => {
      //       checkIsLoggedIn()
      // }, [])
      const checkIsLoggedIn = () => {
            const isLoggedIn = !!localStorage.getItem("token")
            if (!isLoggedIn) {
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
                              {/* @ts-ignore */}
                              <PublicRoute exact path="/" component={Login} />
                              <PublicRoute path="/number-submit" component={NumberSubmit} children={undefined} isAuthenticated={false} />
                              <Route path="/user/policy" component={Policy} />
                              <PriveteRoute path="/home" component={HomePage} children={undefined} isAuthenticated={false} />
                              <Route path="/project/new" component={New} />
                              <Route path="/project/on-going" component={OnGoing} />
                              <Route path="/project/roule-book-bank" component={RouleBookBank} />
                              <Route path="/account" component={Account} />
                              <Route path="/final" component={Final} />
                              <Route path="/calendar-data" component={CalendarPage} />
                              <Route path="/note" component={Event} />
                              <Route path="/introduction" component={Introduction} />
                              <Route path="/commercial" component={Commercial} />
                              <Route path="/about-us" component={AboutUs} />
                              <Route path="/contact-us" component={ContactUs} />
                              <Route path="/Logout" component={Logout} />
                              {/* <Route exact path="not-fond" component={Not} /> */}

                        </Switch>
                  </Layout>
            </BrowserRouter>
      );
}