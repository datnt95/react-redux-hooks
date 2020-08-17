import React from "react";
import { Switch, Redirect } from "react-router-dom";

import Staff from "./pages/auth/index.jsx";
import Login from "./pages/auth/index.jsx";
import PrivateRoute from "./pages/auth/PrivateRoute.jsx";
import AlreadyLoginRoute from "./pages/auth/AlreadyLoginRoute.jsx";

import MainLayout from "./layout/Main.jsx";
import RouteWithLayout from "./components/router/RouteWithLayout.jsx";

const pages = [
    {
        component: Staff,
        path: "/staff",
        layout: MainLayout
    }
];

const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/staff" />
            {pages.map(({ path, component, layout }) => {
                return (
                    <PrivateRoute component={component} key={path} path={path}>
                        {(matchProps) => {
                            return <RouteWithLayout layout={layout} component={component} {...matchProps} />;
                        }}
                    </PrivateRoute>
                );
            })}
            <AlreadyLoginRoute path="/login" component={Login} />
            <Redirect to="/login" />
        </Switch>
    );
};

export default Routes;
