import * as React from "react";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from './sidebar/Sidebar';
import Layout from "./Layout/Layout";
import {
      Login,
      NumberSubmit,
      Policy,
      HomePage,
      New,
      OnGoing,
      RouleBookBank,
      TelegramChannel,
      Profile,
      CalendarPage,
      OrderAds,
      ContactUs,
      Event,
      Final,
      Present,
      Logout,
      WhyEshel,
      AboutUs,
      Certificates,
} from './pages/index';
// import PriveteRoute from "./utils/PriveteRoute";
// import PublicRoute from "./utils/PublicRoute";


export default function AppRouter(): JSX.Element {
      // const [user, setUser] = useState([]);

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
                        <Sidebar />
                        <Switch>
                              {/* @ts-ignore */}
                              <Route exact path="/" component={Login} />
                              <Route path="/number-submit" component={NumberSubmit} />
                              <Route path="/user/policy" component={Policy} />
                              <Route path="/home" component={HomePage} />
                              <Route path="/project/new" component={New} />
                              <Route path="/project/on-going" component={OnGoing} />
                              <Route path="/project/roule-book-bank" component={RouleBookBank} />
                              <Route path="/profile" component={Profile} />
                              <Route path="/why-eshel" component={WhyEshel} />
                              <Route path="/about-us" component={AboutUs} />
                              <Route path="/certificates" component={Certificates} />
                              <Route path="/project/archive" component={Final} />
                              <Route path="/calendar" component={CalendarPage} />
                              <Route path="/events" component={Event} />
                              <Route path="/present" component={Present} />
                              <Route path="/order-ads" component={OrderAds} />
                              <Route path="/telegram-channels" component={TelegramChannel} />
                              <Route path="/msg-box" component={ContactUs} />
                              <Route path="/user/login" component={Login} />
                              {/* <Route exact path="not-fond" component=* /> */}

                        </Switch>
                  </Layout>
            </BrowserRouter>
      );
}