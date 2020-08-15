import React from "react";
import { Route, Redirect } from "react-router-dom";

import AuthenticationCheck from "./AuthenticationCheck.jsx";

function PrivateRoute({ ...rest }) {
    return (
        <AuthenticationCheck
            onAuth={() => <Route {...rest} />}
            onUnAuth={() => {
                return <Redirect to="/login" />;
            }}
        />
    );
}

export default PrivateRoute;
