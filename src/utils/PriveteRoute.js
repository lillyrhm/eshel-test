import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getLocalToken } from './Common';

  
  function PrivateRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: '/',
                    state: { from: location }
                  }}
                />
              ))
        }
      />
    );
  }
  
  export default PrivateRoute;




























// const PriveteRoute = ({ component: Component, ...rest }) => {
    

    // return
    // (
    //     <>
    //         <Route
    //             {...rest}
    //             render={props => {
    //                 return
    //                 (

    //                     // !getLocalToken() ? (<Component {...props} />)
    //                     //     : (<Redirect to={{ pathname: "/home", state: { from: props.location } }} />)
    //                     getLocalToken('token') ? (
    //                         // <Redirect to={{ pathName: '/home' }} />
    //                         // &&
    //                         <Component {...props} />

    //                     ) : (
    //                         <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    //                         // && <Component {...props} />
    //                     )
    //                 )
    //             }}
    //         />
    //     </>
    // )

// }

// export default PriveteRoute;