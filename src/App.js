import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState([]);
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Header></Header>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <PrivateRoute path="/admin">
                            <Admin></Admin>
                        </PrivateRoute>
                        <PrivateRoute path="/orders">
                            <Orders></Orders>
                        </PrivateRoute>
                        <PrivateRoute path="/checkout/:id">
                            <CheckOut></CheckOut>
                        </PrivateRoute>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="*">
                            <NoMatch></NoMatch>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
