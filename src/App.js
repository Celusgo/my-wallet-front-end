import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import './css/reset.css';
import Register from './routes/Register';
import Login from './routes/Login';


export default function App(){

    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/register" exact>
                <Register/>
            </Route>
        </Switch>
    </BrowserRouter>
    )

}