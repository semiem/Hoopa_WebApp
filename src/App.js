import React, {Component, useEffect, useState} from 'react';
import './App.css';

import {Main, NotFoundPage} from './components';
import {Route, Switch} from "react-router-dom";
import {isLogin} from "./Utils/Helper";
import Login from "./components/Login";

class App extends Component {

    render() {
        console.log(isLogin())
        if (isLogin())
            return (
                <Main/>
            )
        else
            return(
                <Login/>
            )
    }
}

export default App;
