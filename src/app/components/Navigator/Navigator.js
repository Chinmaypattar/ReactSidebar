import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import { Navigate, withRouter } from "react-router-dom";
import './Navigator.scss';

class Navigator extends Component {
    constructor(props) {
        super(props);
        console.log('props main', props);
    }
    render() {
        return (
            <div>
                <div className="left-navigation">
                    <SideBar {...this.props} />
                </div>
            </div>
        );
    }
}

export default withRouter(Navigator);