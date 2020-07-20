import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import About from "./pages/About";

const Routes = () => {
    return (
        <HashRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/planos" component={Plans} />
                    <Route path="/sobre" component={About} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Layout>
        </HashRouter>
    );
};

export default Routes;
