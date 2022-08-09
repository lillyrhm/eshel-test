import React from 'react'
import { Route, Redirect } from 'react-router-dom';
// import { getToken } from './Common';

  
  function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            !isAuthenticated ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/home',
                  state: { from: location }
                }}
              />
            ))
        }
      />
    );
  }
  
  export default PublicRoute;





























// const PublicRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 return (
//                     // !getToken() ? <Component {...props} />
//                     //     : <Redirect to={{ pathname: "/" }} />
//                     !getToken() ? <Component {...props} />
//                         : <Redirect to={{ pathName:'/' }} />
//                 )
//             }}
//         />
//     )
// }

// export default PublicRoute
