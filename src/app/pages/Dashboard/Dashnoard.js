import React, { Component } from "react";

import Layout from "../../components/SideBar/Layout";
import SideBar from "../../components/SideBar/SideBar";

export default class Dashboard extends Component {
  render() {
    const Crumbs = ["Dashboard"];
    return (
      <div>
        <Layout title="Dashboard" {...this.props}>
          <div className="row"></div>
        </Layout>
      </div>
    );
  }
}
