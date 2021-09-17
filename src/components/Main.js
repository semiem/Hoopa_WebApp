import React from 'react';
import {NavLink, Switch, Route} from 'react-router-dom';
import {ContentMain} from "./PageMain/ContentMain";
import {FooterNav, HeaderArea, InternetConnectionStatus, NotFoundPage} from "./Defaults";

const Main = () => {

    return (
        <div className="">
            <HeaderArea/>
            {/*<PreLoader/>*/}
            <InternetConnectionStatus/>
            <Switch>
                <Route key="HomePage" exact path='/' component={ContentMain}/>
                <Route key="NotFound" component={NotFoundPage}/>
            </Switch>
            <FooterNav/>
        </div>
    );
}

export {Main};
