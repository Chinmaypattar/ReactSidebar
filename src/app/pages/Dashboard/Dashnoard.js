import React, { Component } from "react";

import Layout from "../../components/SideBar/Layout";
import SideBar from "../../components/SideBar/SideBar";

import Subheader from "../../components/SubHeader/SubHeader";
import CommonCard from "../../components/CommoCard/CommonCard";
import BarGraph from "../../components/BarGraph/BarGraph";
import PieChart from "../../components/PieChart/PieChart";
export default class Dashboard extends Component {
  render() {
    const Crumbs = ["Dashboard"];
    return (
      <div>
        <Layout title="Dashboard" {...this.props}>
         
          <div className="row">
            <div className="col-md-4">
              <CommonCard>
              <PieChart />
              </CommonCard>
            </div>
            <div className="col-md-5">
              <CommonCard>
                <BarGraph />
              </CommonCard>
            </div>
            <div className="col-md-3">
              <CommonCard></CommonCard>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
