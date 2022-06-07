import React, { Component } from "react";
import Layout from "../../components/SideBar/Layout";
import Button from "@mui/material/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CommonCard from "../../components/CommoCard/CommonCard";

export default class ClusterAddEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  styles = theme => ({
    multilineColor: {
      color: "red"
    }
  });

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id", id);
  }

  addCluster() {
    alert("add");
    this.props.history.push("/cluster/add");
  }

  render() {
    return (
      <Layout title="Cluster" {...this.props}>
        <div className="text_color" style={{ paddingTop: "5px", marginBottom: "5px" }}>
          <div className="row ">
            <div className="col-md-12">
              <CommonCard></CommonCard>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
