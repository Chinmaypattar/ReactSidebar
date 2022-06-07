import React, { Component } from 'react';
import './SideBar.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Layout from './Layout';

const SideBar = (props) => {
    return (
        <Layout {...props}/>
    );
}

export default SideBar;