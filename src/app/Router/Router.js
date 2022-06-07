import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashnoard";

import Cluster from "../pages/Cluster/Cluster";
import ClusterAddEdit from "../pages/Cluster/ClusterAddEdit";
import Jobs from "../pages/Jobs/Jobs";
import Teanant from "../pages/Administration/Teanant/Teanant";
import AllResources from "../pages/Administration/AllResources/AllResources";
import Roles from "../pages/Administration/Roles/Roles";
import Users from "../pages/Administration/Users/Users";
import DataSources from "../pages/Administration/DataSources/DataSources";
export default class RouterMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/cluster" component={Cluster} />
            <Route exact path="/cluster/:id" component={ClusterAddEdit} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/teanant" component={Teanant} />
            <Route exact path="/allresources" component={AllResources} />
            <Route exact path="/roles" component={Roles} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/datasources" component={DataSources} />
          </Switch>
        </Router>
      </div>
    );
  }
}
