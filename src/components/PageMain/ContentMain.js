import React from "react";
import {NavLink} from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {MessageItem} from "./MessageItem";
import {addDataIntoCache, generateRequest, getCacheData, isLogin} from "../../Utils/Helper";
import './ContentMain.css'

export class ContentMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            mItems: [],
        };
    }


    componentWillReceiveProps(nextProps) {
        // $('#preloaderContainer').show();
        // this.state.isLoaded = false;
        // this.getStructureItems();
    }

    componentDidUpdate(prevProps) {

        // console.log("componentDidUpdate");

        // $('.gallery').flickity({
        // });
    }

    componentDidMount() {

        generateRequest("users", 'GET', {})
            .then(
                (messagesResult) => {
                    if (isLogin())
                        addDataIntoCache("RequestCaches", "users", messagesResult);
                    this.setState({
                        mItems: messagesResult,
                        isLoaded: true
                    });
                }
            );
        // this.getStructureItems();

        // this.initCr();
        // $('#preloaderContainer').hide();
        // console.log("TIMER START");
        // setTimeout(function () { //Start the timer
        //     this.initCr();
        //     $('#preloaderContainer').hide();
        //     // console.log("TIMER END");
        // }.bind(this), 3200)

    }


    render() {

        const {error, isLoaded, mItems} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (
            !isLoaded
        ) {
            return <div>در حال دریافت اطلاعات...</div>;
        } else {
            return (
                <div className="container-lg">
                    <div className="scrollmenu mb-3">
                        <span className="badge rounded-pill bg-light text-dark" style={{fontSize: 'larger'}}>All</span>
                        <span className="badge rounded-pill bg-light text-dark"
                              style={{fontSize: 'larger'}}>From Hoopa</span>
                        <span className="badge rounded-pill bg-light text-dark"
                              style={{fontSize: 'larger'}}>From users</span>
                        <span className="badge rounded-pill bg-light text-dark"
                              style={{fontSize: 'larger'}}>Archived</span>
                    </div>
                    <NavLink to='/' className="float-start">
                        <img
                            src="/img/icons/Vector.png"
                            className="p-2"
                            style={{
                                height: "40px",
                                width: "40px"
                            }}
                        />
                    </NavLink>
                    <div className="list">
                        {
                            mItems.data.map((mItem) => {
                                return (
                                    <MessageItem messageObj={mItem}/>
                                )
                            })
                        }
                    </div>
                </div>
            );

        }
    }

}