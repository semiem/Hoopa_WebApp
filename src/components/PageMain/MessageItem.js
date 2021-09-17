import React from "react";
import './MessageItem.css'

export class MessageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false
        };

        this.mainSlider = null;
    }


    componentWillReceiveProps(nextProps) {
    }

    componentDidUpdate(prevProps) {

    }

    componentDidMount() {

        $('.item-swipe').swipeTo({
            //default options
            minSwipe: 50,
            angle: 100,
            binder: true,
            wrap: 'body',
            //callback functions
            swipeStart: function () {
                // console.log('start');
            },
            swipeMove: function () {
                // console.log('move');
            },
            swipeEnd: function () {
                // console.log('end');
            },
        });


        this.setState({
            item: this.props.messageObj,
            isLoaded: true
        });

    }

    deleteItem(e) {
        // ToDo: Call Delete API!
        e.preventDefault();
        let that = $(this);
        that.parent().parent().fadeOut('500');
    }

    render() {

        const {error, isLoaded, item} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (
            !isLoaded
        ) {
            return <div>در حال دریافت اطلاعات...</div>;
        } else {
            return (
                <div className="item" >
                    <a href="#" className="item-swipe">
                        <img src={item.avatar} className="rounded-circle float-end" style={{width: "50px"}}/>
                        <p className="fs-6 fw-bold m-0">{item.first_name + ' ' + item.last_name}</p>
                        <p className="fs-6 ">{item.email}</p>
                    </a>
                    <div className="item-back">
                        <button onClick={(e) => this.deleteItem(e)}
                                className="action first btn-delete" type="button">
                            {/*<img src="/img/icons/trash-alt.png"/>*/}
                            <img
                                src="/img/icons/trash-alt.png"
                                className="rounded-circle p-2"
                                style={{
                                    backgroundColor: 'black'
                                }}
                            />
                        </button>
                    </div>
                </div>
            );
        }
    }

}