import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Staff from "./pages/auth/index.jsx";
import Login from "./pages/auth/index.jsx";
import AlreadyLoginRoute from "./pages/auth/AlreadyLoginRoute.jsx";

const pages = [
    {
        component: Staff,
        path: "/staff",
    },
];

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/calendar" />
            // TODO: add private route.
            {pages.map(({ path, component }) => {
                return <div key={path}>Something</div>;
            })}
            <AlreadyLoginRoute path="/login" component={Login} />
            <Redirect to="/login" />
        </Switch>
    );
};

export default Routes;
