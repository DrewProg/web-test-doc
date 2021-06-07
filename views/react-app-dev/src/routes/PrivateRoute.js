import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, auth, ...rest }) {
    return(
        <Route
        {...rest}
        render={props => (auth === true)
            ? <Redirect to="/lk" />
            : <Component {...props} />
        }/>
    );
}

export default PrivateRoute;