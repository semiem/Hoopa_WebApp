import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
// export * from './Utils';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
serviceWorkerRegistration.register();

reportWebVitals();
