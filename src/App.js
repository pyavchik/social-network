import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import RSidebar from "./components/layout/RSidebar";

const App = () =>
    <Router>
        <Fragment className="container">
            <Navbar/>
            <div className="row">
                <div className="col">
                    <RSidebar />
                </div>
                <div className="col-6">
                    <Route exact path="/" component={ Landing }/>
                    <section className="container">
                        <Switch>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </section>
                </div>
                <div className="col">
                    <RSidebar />
                </div>
            </div>
        </Fragment>
    </Router>

export default App;
