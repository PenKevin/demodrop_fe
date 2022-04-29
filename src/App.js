import React, {useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./components/Navigation/Navigation";
import Overview from "./pages/Overview";
import SignUp from "./pages/Sign-up";
import {AuthContext} from "./context/AuthContext";
import './App.css';
import MSignUp from "./pages/MSign-up";



function App() {

    const { isAuth } = useContext(AuthContext);

    return (
        <div>
            <Navigation  />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/msign-up">
                    <MSignUp />
                </Route>
                <Route path="/overview">
                    {isAuth ? <Overview /> : <Redirect to="/" />}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
