import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./../pages/Login/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
            to={{ pathname: "/", state: { referer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;