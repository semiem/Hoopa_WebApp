import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

let deferredPrompt;
const HeaderArea = () => {
    let temp = null;
    const [installable, setInstallable] = useState(false);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            setInstallable(true);
        });

        window.addEventListener('appinstalled', () => {
            // Log install to analytics
            console.log('INSTALL: Success');
        });
    }, []);

    const handleInstallClick = (e) => {
        // Hide the app provided install promotion
        setInstallable(false);
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };

    if (window.innerWidth > 992) {
        temp =
            <nav className="navbar navbar-expand-lg navbar-dark mt-1">
                {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                {/*<button className="navbar-toggler" type="button" data-toggle="collapse"*/}
                {/*        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                {/*        aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*    <span className="navbar-toggler-icon"></span>*/}
                {/*</button>*/}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            {/*<NavLink className="nav-link" to="/">خانه<span className="sr-only">(current)</span></NavLink>*/}
                            <NavLink className="nav-link" to="/">
                                <img
                                    src="/img/icons/home_t.png"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "50px",
                                        marginTop: "10px",
                                        cursor: "pointer"
                                    }}
                                /></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/videonews">
                                <img
                                    src="/img/icons/vn_t.png"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "50px",
                                        marginRight: "10px",
                                        marginTop: "10px",
                                        cursor: "pointer"
                                    }}
                                />
                            </NavLink>
                        </li>


                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                        {/*       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                        {/*        Dropdown*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*        <a className="dropdown-item" href="#">Action</a>*/}
                        {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                        {/*        <div className="dropdown-divider"></div>*/}
                        {/*        <a className="dropdown-item" href="#">Something else here</a>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link disabled" href="#">Disabled</a>*/}
                        {/*</li>*/}
                    </ul>
                    {/*<form className="form-inline my-2 my-lg-0">*/}
                    {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                    {/*        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                    {/*</form>*/}
                </div>
            </nav>
    } else {

    }
    let phoneNumber = sessionStorage.getItem('phoneNumber');
    let loginBTN =
        <img
            src="/img/icons/login_t.png"
            style={{
                maxWidth: "100%",
                maxHeight: "50px",
                marginTop: "10px",
                cursor: "pointer"
            }}
        />
    // <button className="btn btn-creative btn-warning">
    //     ورود و ثبت نام
    // </button>

    if (phoneNumber != null
        || sessionStorage.getItem('token') != null
        || sessionStorage.getItem('secret') != null) {
        loginBTN =
            <img
                src="/img/icons/profile_t.png"
                style={{
                    maxWidth: "100%",
                    maxHeight: "50px",
                    marginTop: "10px",
                    cursor: "pointer"
                }}
            />
        // <button className="btn btn-creative btn-warning">
        //     {phoneNumber}
        //     خوش آمدید
        // </button>
    }
    return (
        <div className="header-area" id="headerArea"
             style={{
                 border: "none",
                 margin: "auto",
                 height: "64px",
                 background:
                     "linear-gradient(180deg, rgba(12,21,59,1) 0%, rgba(12,21,59,0.6979166666666667) 65%, rgba(12,21,59,0) 100%)"
             }}>
            <div className="container-fluid">

                <div
                    className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">

                    <div className="m-0 p-0">
                        <a href="/">
                            <img src="/img/sepehr_logo_persian1.svg" alt=""
                                 style={{
                                     width: "auto",
                                     height: "50px",
                                     maxWidth: "100%",
                                     maxHeight: "50px",
                                     marginTop: "8px",
                                     cursor: "pointer"
                                 }}/>
                        </a>
                    </div>
                    {/*<div className="navbar--toggler" id="affanNavbarToggler">*/}
                    {/*    <span className="d-block"></span>*/}
                    {/*    <span className="d-block"></span>*/}
                    {/*    <span className="d-block"></span>*/}
                    {/*</div>*/}

                    {temp}

                    {/*{installable &&*/}
                    {/*<button className="btn btn-creative btn-danger" onClick={handleInstallClick}>*/}
                    {/*    نصب اپلیکیشن*/}
                    {/*</button>*/}
                    {/*}*/}
                    {/*<div className="logo-wrapper">*/}
                    <NavLink to={"/login"}>
                        {loginBTN}
                    </NavLink>

                </div>
            </div>
        </div>
    );
}

export
{
    HeaderArea
};
