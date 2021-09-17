import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

let deferredPrompt;
const HeaderArea = () => {
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
            // console.log('INSTALL: Success');
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
                // console.log('User accepted the install prompt');
            } else {
                // console.log('User dismissed the install prompt');
            }
        });
    };


    return (
        <div className="header-area" id="headerArea"
             style={{
                 border: "none",
                 margin: "auto",
                 marginTop: "8px",
                 height: "64px",
             }}>
            <div className="container-fluid">

                <div
                    className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">

                    <div className="m-0 p-0 rounded-circle "
                         style={{backgroundColor: '#b0b0b0', marginRight: '15px'}}>
                        <NavLink to='/' activeClassName="active">
                            <img
                                src="/img/icons/avatar.png"
                                className="rounded-circle p-2"
                                style={{
                                    height: "45px",
                                    width: "45px"
                                }}
                            />
                        </NavLink>
                    </div>


                    <div className="logo-wrapper">
                        <img src="/img/icons/hoopa_s.png" alt=""
                             style={{
                                 width: "auto",
                                 cursor: "pointer"
                             }}/>
                    </div>


                    {installable &&
                    <button className="btn btn-creative" onClick={handleInstallClick}
                            style={{backgroundColor: "#FFB21A"}}>
                        نصب اپلیکیشن
                    </button>
                    }
                    {!installable &&
                    <div></div>
                    }
                    <div></div>
                    {/*<NavLink to={""}>*/}
                    {/*</NavLink>*/}

                </div>
            </div>
        </div>
    );
}

export
{
    HeaderArea
};
