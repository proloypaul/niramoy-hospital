import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from './useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoadign} = useAuth()

    if(isLoadign){
        return <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    return (
        <Route
        {...rest}
        render = {({location}) => user.email ? children: <Redirect
        to={{
            pathname: "/register",
            state: { from: location }
        }}
        >

        </Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;