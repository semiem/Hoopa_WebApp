import React from "react";
import 'react-multi-carousel/lib/styles.css';
import './ContentMain.css'

export class BadgeFromFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            title: [],
        };
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            isLoaded: true
        });


    }


    render() {

        const {error, isLoaded, title} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (
            !isLoaded
        ) {
            return <div>در حال دریافت اطلاعات...</div>;
        } else {
            return (
                <span className="badge rounded-pill bg-light text-dark" style={{fontSize: 'larger'}}>{title}</span>
            );

        }
    }

}