import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
import { NotFound } from './NotFound';

export const AppRouter = () => {
    return (

        <Router>
            <div>

                <NavBar/>

                <Switch>
                    <Route exact path="/about" component={ AboutScreen }/>
                    <Route exact path="/login" component={ LoginScreen }/>
                    <Route exact path="/" component={ HomeScreen }/>
                    <Route component={ NotFound }/>
                </Switch>
            </div>
        </Router>

    )
}
