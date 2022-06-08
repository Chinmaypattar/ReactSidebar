import React, { Component } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AccordionComp from "../../components/Accordion/Accordion";
import BarGraph from "../../components/BarGraph/BarGraph";
import CommonCard from "../../components/CommoCard/CommonCard";
import PieChart from "../../components/PieChart/PieChart";
import Layout from "../../components/SideBar/Layout";
import SideBar from "../../components/SideBar/SideBar";
import "./dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <Layout title="Dashboard" {...this.props}>
        <div className="dp-section-dash-data-wraper">
          <div className="dp-dash-data-main-container">
            <div className="dp-four-cards-container">
              <div className="dp-cluster-jobs-admin-card-cont">
                <div className="dp-cluster-jobs-cont">
                  <CommonCard customClass="dp-cluster-card">
                    <div className="card-heading">Cluster</div>
                    <PieChart />
                  </CommonCard>
                  <CommonCard customClass="dp-jobs-card">
                    <div className="card-heading">Jobs</div>
                    <BarGraph />
                  </CommonCard>
                </div>
                <div className="dp-admin-cont">
                  <CommonCard customClass="dp-admin-card">
                    <div className="card-heading">Admistration</div>
                    <div className="dp-admin-prop-cont">
                      <div className="dp-table-cont">
                        <div className="dp-prop-table">
                          <table>
                            <tbody>
                              <tr>
                                <th colspan="2">Tenants</th>
                              </tr>
                              <tr>
                                <td className="text-left">Total</td>
                                <td className="text-right">16</td>
                              </tr>
                              <tr>
                                <td className="text-left">Pending</td>
                                <td className="text-right">9</td>
                              </tr>
                              <tr>
                                <td className="text-left">Available</td>
                                <td className="text-right">5</td>
                              </tr>
                              <tr>
                                <td className="text-left">Disabled</td>
                                <td className="text-right">2</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="dp-table-cont">
                        <div className="dp-prop-table">
                          <table>
                            <tbody>
                              <tr>
                                <th colspan="2">Users</th>
                              </tr>
                              <tr>
                                <td className="text-left">Total</td>
                                <td className="text-right">28</td>
                              </tr>
                              <tr>
                                <td className="text-left">Active</td>
                                <td className="text-right">20</td>
                              </tr>
                              <tr>
                                <td className="text-left">Inactive</td>
                                <td className="text-right">8</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="dp-table-cont">
                        <div className="dp-prop-table">
                          <table>
                            <tbody>
                              <tr>
                                <th colspan="2">Roles</th>
                              </tr>
                              <tr>
                                <td className="text-left">Roles</td>
                                <td className="text-right">2</td>
                              </tr>
                              <tr>
                                <td className="text-left">Active</td>
                                <td className="text-right">20</td>
                              </tr>
                              <tr>
                                <td className="text-left">Inactive</td>
                                <td className="text-right">8</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div class="dp-table-cont">
                        <div class="dp-prop-table">
                          <table>
                            <tbody>
                              <tr>
                                <th colspan="2">Data Sources</th>
                              </tr>
                              <tr>
                                <td className="text-left">Total</td>
                                <td className="text-right">8</td>
                              </tr>
                              <tr>
                                <td className="text-left">Active</td>
                                <td className="text-right">0</td>
                              </tr>
                              <tr>
                                <td className="text-left">Inactive</td>
                                <td className="text-right">0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="dp-table-cont">
                        <div className="dp-prop-table">
                          <table>
                            <tbody>
                              <tr>
                                <th colspan="2">All Resources</th>
                              </tr>
                              <tr>
                                <td className="text-left">Total</td>
                                <td className="text-right">8</td>
                              </tr>
                              <tr>
                                <td className="text-left">Active</td>
                                <td className="text-right">0</td>
                              </tr>
                              <tr>
                                <td className="text-left">Inactive</td>
                                <td className="text-right">0</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CommonCard>
                </div>
              </div>
              <div className="dp-notification-card-cont">
                <CommonCard customClass="dp-notification-card">
                  <div className="card-heading">Notification</div>
                  <div className="dp-notification-list-wrapper">
                    <div className="dp-notification-list-cont">
                      {noti &&
                        noti.map((data) => {
                          return (
                            <div className="dp-notification">
                              <p className="dp-notification-title">
                                {data.title}
                              </p>
                              <p className="dp-notification-time">
                                {data.time}
                              </p>
                              <p className="dp-notification-details">
                                Cluster ID: {data.id}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </CommonCard>
              </div>
            </div>
            <div className="m-2">
              <AccordionComp header="Bookmarks  | Recently added 5">
                <div>
                  <div className="text-left">
                    <input className="input-search" placeholder="Search Bookmarks" type='search'/>
                  </div>
                  {accordians.map((item) => {
                    return(
                      <>
                    
                      
                      <div className="d-flex justify-content-between">

                      <p style={{marginBottom:'0px'}}>{item.title}</p>
                    <BsThreeDotsVertical/>
                    </div>
                      <hr></hr>
                      </>
                    )
                
                  })}
              
                </div>
              </AccordionComp>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const noti = [
  {
    title: "New cluster created",
    time: "Just now",
    id: " jdajd-82910-jdw",
    type: "cluster",
  },
  {
    title: "Tenant Updated",
    time: "25mins ago",
    name: "SuperTenant",
    id: " jdajd-82910-jdw",
    type: "teanant",
  },
  {
    title: "New cluster created ",
    time: "Just now",
    id: " jdajd-82910-jdw",
    type: "cluster",
  },
  {
    title: "Tenant Updated",
    time: "25mins ago",
    name: "SuperTenant",
    id: " jdajd-82910-jdw",
    type: "teanant",
  },
  {
    title: "New cluster created",
    time: "Just now",
    id: " jdajd-82910-jdw",
    type: "cluster",
  },
  {
    title: "Tenant Updated",
    time: "25mins ago",
    name: "SuperTenant",
    id: " jdajd-82910-jdw",
    type: "teanant",
  },
  {
    title: "New cluster created ",
    time: "Just now",
    id: " jdajd-82910-jdw",
    type: "cluster",
  },
  {
    title: "Tenant Updated",
    time: "25mins ago",
    name: "SuperTenant",
    id: " jdajd-82910-jdw",
    type: "teanant",
  },
  {
    title: "New cluster created",
    time: "Just now",
    id: " jdajd-82910-jdw",
    type: "cluster",
  },
  {
    title: "Tenant Updated",
    time: "25mins ago",
    name: "SuperTenant",
    id: " jdajd-82910-jdw",
    type: "teanant",
  },
];

const accordians = [
  {
    title: "Cluster Details",
  },
  {
    title: "Scale Data Resources",
  },
  {
    title: "Scale Data Provisioning",
  },
  {
    title: "Scale Data Properties",
  },
  {
    title: "Endpoints",
  },
  {
    title: "Jobs Details",
  },
  {
    title: "User Details",
  },
];
