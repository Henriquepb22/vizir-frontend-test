import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Layout from "./components/Layout";

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/planos">
                        <Plans />
                    </Route>
                    <Route path="/sobre">
                        <About />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default Routes;
