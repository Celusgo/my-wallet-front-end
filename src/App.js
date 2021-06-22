import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import './css/reset.css';
import Register from './routes/Register';
import Login from './routes/Login';
import Homepage from './routes/Homepage';


export default function App() {

    return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/register" exact>
                        <Register />
                    </Route>
                    <Route path="/homepage" exact>
                        <Homepage />
                    </Route>
                </Switch>
            </BrowserRouter>
    )

}