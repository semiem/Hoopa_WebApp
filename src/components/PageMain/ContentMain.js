import React from "react";
import {NavLink} from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import {MessageItem} from "./MessageItem";
import {addDataIntoCache, generateRequest, isLogin} from "../../Utils/Helper";
import './ContentMain.css'
import {BadgeFromFilter} from "./Badge-FromFilter";

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
        // this.props = nextProps;
        // ToDo: Add Type Filter To Items! ( Type Data In Api Not Found! )
        // let newItems = this.mItems.filter(function (ele) {
        //     return ele.typeId != clickedBadge.typeId;
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
            let filters = [{title: "All"},{title: "From Hoopa"},{title: "From users"},{title: "Archived"}]
            return (
                <div className="container-lg">
                    <div className="scrollmenu mb-3">
                        {
                            filters.map((filter) => {
                                return (
                                    <BadgeFromFilter title={filter.title}/>
                                )
                            })
                        }
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