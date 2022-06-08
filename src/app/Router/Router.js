import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Dashboard from "../pages/Dashboard/Dashnoard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cluster from "../pages/Cluster/Cluster";
import ClusterAddEdit from "../pages/Cluster/ClusterAddEdit";
import Jobs from "../pages/Jobs/Jobs";
import Teanant from "../pages/Administration/Teanant/Teanant";
import AllResources from "../pages/Administration/AllResources/AllResources";
import Roles from "../pages/Administration/Roles/Roles";
import Users from "../pages/Administration/Users/Users";
import DataSources from "../pages/Administration/DataSources/DataSources";
import ClusterDetails from "../pages/Cluster/ClusterDetails";
import {
  ALL_RESOURCES_PATH,
  CLUSTER_DETAILS_PATH,
  CLUSTER_PATH,
  DASHBOARD_PATH,
  DATA_SOURCES_PATH,
  JOBS_PATH,
  ROLES_PATH,
  TEANANT_PATH,
  USER_PATH,
} from "./PathConst";
export default class RouterMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path={DASHBOARD_PATH} component={Dashboard} />

            <Route exact path={CLUSTER_PATH} component={Cluster} />
            <Route exact path="/cluster/:id" component={ClusterAddEdit} />
            <Route exact path={JOBS_PATH} component={Jobs} />
            <Route exact path={TEANANT_PATH} component={Teanant} />
            <Route exact path={ALL_RESOURCES_PATH} component={AllResources} />
            <Route exact path={ROLES_PATH} component={Roles} />
            <Route exact path={USER_PATH} component={Users} />
            <Route exact path={DATA_SOURCES_PATH} component={DataSources} />
            <Route
              exact
              path={`${CLUSTER_DETAILS_PATH}/:id`}
              component={ClusterDetails}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
