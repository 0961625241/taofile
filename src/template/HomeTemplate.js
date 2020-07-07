import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/NavBar";

function HomeLayout(props) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
}
