import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthenticationCheck from "./AuthenticationCheck.jsx";

const AlreadyLoginRoute = ({ ...rest }) => {
    return (
        <AuthenticationCheck
            onUnAuth={() => <Route {...rest} />}
            onAuth={() => {
                return <Redirect to="/" />;
            }}
        />
    );
};

export default AlreadyLoginRoute;
