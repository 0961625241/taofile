import React from 'react';
import logo from './logo.svg';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/footer"
// import TinTuc from './container/Home/tintuc';
import Routes from './RoutesDom/Routes'
import HomeTemplate from "./template/HomeTemplate";
function App() {

  const showMenuHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
        {showMenuHome(Routes)}
        </Switch>
      </BrowserRouter>
       {/* <TinTuc /> */}
      <Footer />
    </div>
   
  );
}

export default App;
