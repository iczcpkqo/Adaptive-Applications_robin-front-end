/*
Application
 */
import React, {Component} from 'react';

//import of the routing
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from "./pages/login/login.js";
import Home from "./pages/home/home"
import Robin from "./pages/robin/robin"
export default class App extends Component{
    render() {
        return (
            //Home page:router
            <BrowserRouter>
                <Switch> {/*Only match one of them*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/' component={Login}></Route>
                </Switch>
            </BrowserRouter>
        )
         }
}

