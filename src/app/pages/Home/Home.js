import React, { Component } from "react";
import { Navigate, withRouter } from "react-router-dom";
import { isLocalHost } from "../../utils/common";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "loading"
    }
  }
  componentDidMount() {  
    if (isLocalHost()) {
        this.props.history.push("/login");
    } else {
      // window.location.assign("http://nexenstial.com/flavorfactory/");
      this.props.history.push("/login");
    }
  }
  render() {
    return <div>{this.state.display}</div>;
  }
}

export default withRouter(Home);
