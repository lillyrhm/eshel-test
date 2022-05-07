import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./layout/layout";
import AboutUs from "./pages/AboutUs"
import HomePage from "./pages/Home";
import Account from "./pages/Account";
import Introduction from "./pages/Introduction";
import ContactUs from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Commercial from "./pages/Commercial";
import Final from "./pages/Final";
import NotFound from "./pages/Not";
import Navbar from './component/nav/Sidebar'


export default function AppRouter() {


      return (
            <BrowserRouter>
                  <Layout>
                        <Navbar />
                        <Switch>
                              <Route exact path="/" component={HomePage} />
                              <Route exact path="/account" component={Account} />
                              <Route exact path="/final" component={Final} />
                              <Route exact path="/calendar-data" component={Calendar} />
                              <Route exact path="/note" component={Calendar} />
                              <Route exact path="/introduction" component={Introduction} />
                              <Route exact path="/commercial" component={Commercial} />
                              <Route exact path="/about-us" component={AboutUs} />
                              <Route exact path="/contact-us" component={ContactUs} />
                              <Route exact path="/out-of" component={NotFound} />


                              {/* <Route exact path="/contact-us" component={ContactUs} /> */}

                        </Switch>
                  </Layout>
            </BrowserRouter>
      );
}