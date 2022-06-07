import React, { Component } from "react";
import "./SubHeader.scss";
class Subheader extends Component {
  render() {
    const { crumbs, title } = this.props;
    // console.log("data", crumbs);
    return (
      <div>
        <div className="row main">
          <div className="col ">
            <p className="title1">{title && title}</p>
          </div>
          <div className="col title2">
            <nav className="divider" aria-label="breadcrumb">
              <ol className="breadcrumb">
                {crumbs &&
                  crumbs.map((item, i) => {
                    const length = crumbs.length - 1;
                    console.log("Panni", i);
                    return (
                      <>
                        {length == i ? (
                          <li className="breadcrumb-item bread-active">
                            {item}
                          </li>
                        ) : (
                          <li className="breadcrumb-item bread-inactive">
                            {item}
                          </li>
                        )}
                      </>
                    );
                  })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Subheader;
