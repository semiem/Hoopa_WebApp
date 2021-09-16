import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import {NotFoundPage} from './NotFoundPage';
import {HeaderArea, InternetConnectionStatus, PreLoader} from "../Utils";

const Main = () => {

    return (
        <div className="">
            {/*<HeaderArea/>*/}
            <PreLoader/>
            <InternetConnectionStatus/>
            <Switch>
                <Route key="HomePage" exact path='/' component={HomePage}/>
                <Route key="NotFound" component={NotFoundPage}/>
            </Switch>
            {/*<FooterNav/>*/}
        </div>
    );
}

export {Main};
