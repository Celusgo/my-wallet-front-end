import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import './css/reset.css';
import UserContext from './contexts/UserContext';
import Register from './routes/Register';
import Login from './routes/Login';
import Homepage from './routes/Homepage';
import NewIncome from './routes/NewIncome';
import NewOutgoing from './routes/NewOutgoing';

export default function App() {
    const [user, setUser] = React.useState(localStorage.lenght!==0? JSON.parse(localStorage.getItem('user')): []);

    return (
        <UserContext.Provider value ={{ user, setUser }}>
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
                    <Route path="/newincome" exact>
                        <NewIncome />
                    </Route>
                    <Route path="/newoutgoing" exact>
                        <NewOutgoing />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )

}