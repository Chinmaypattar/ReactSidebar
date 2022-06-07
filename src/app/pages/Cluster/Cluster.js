import React, { Component } from "react";
import Layout from "../../components/SideBar/Layout";
import Button from "@mui/material/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CommonCard from "../../components/CommoCard/CommonCard";

export default class Cluster extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  addCluster=()=> {
    // alert("add");
    this.props.history.push("/cluster/add");
  }

  render() {
    return (
      <Layout title="Cluster" {...this.props}>
        <div className="text_color" style={{ paddingTop: "5px", marginBottom: "5px" }}>
          <div className="row ">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                style={{ marginBottom: "5px", textTransform: "none" }}
                variant="contained"
                startIcon={<AddIcon />}
                onClick={this.addCluster}
              >
                Create Cluster
              </Button>
              {/* <Button style={{ textTransform: "none" }} variant="outlined" startIcon={<DeleteOutlineIcon />}>
                Delete Cluster
              </Button> */}
            </div>
          </div>
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
