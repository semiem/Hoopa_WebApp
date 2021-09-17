import React, {Component} from 'react';
import './App.css';

import {Main} from './components';
import {isLogin} from "./Utils/Helper";
import Login from "./components/Login";

class App extends Component {

    render() {
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
