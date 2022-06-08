import React, { Component } from "react";

import Layout from "../../components/SideBar/Layout";
import SideBar from "../../components/SideBar/SideBar";
import "./dashboard.css";

export default class Dashboard extends Component {
  render() {
    return <Layout title="Dashboard" {...this.props}></Layout>;
  }
}
