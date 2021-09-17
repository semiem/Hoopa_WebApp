import React from 'react';
import {NavLink} from "react-router-dom";
import './FooterNav.css'

const FooterNav = () => {
    return (
        <div className="footer-nav-area" id="footerNav">
                <div className="position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle-y  rounded-circle"
                         style={{backgroundColor: '#b0b0b0',  marginLeft: '15px'}}>
                        <NavLink to='/' activeClassName="active">
                            <img
                                src="/img/icons/inbox.png"
                                className="rounded-circle p-2 "
                                style={{
                                    height: "55px",
                                    width: "55px"
                                }}
                            />
                        </NavLink>
                    </div>
                    <div className="position-absolute top-0 start-50 translate-middle rounded-circle"
                         style={{backgroundColor: '#b0b0b0'}}>
                        <NavLink to='/' activeClassName="active">
                            <img
                                className=" p-2"
                                src="/img/icons/home1.png"
                                style={{
                                    height: "60px",
                                    width: "60px"
                                }}
                            />
                        </NavLink>
                    </div>
                    <div className="position-absolute top-50 end-0 translate-middle-y rounded-circle "
                         style={{backgroundColor: '#b0b0b0', marginRight: '15px'}}>
                        <NavLink to='/' activeClassName="active">
                            <img
                                src="/img/icons/edit.png"
                                className="rounded-circle p-2"
                                style={{
                                    height: "55px",
                                    width: "55px"
                                }}
                            />
                        </NavLink>
                    </div>
                </div>
        </div>
    );
}

export
{
    FooterNav
};
