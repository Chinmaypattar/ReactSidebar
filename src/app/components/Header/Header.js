import React from "react";
import { BsBellFill, BsPersonCircle } from "react-icons/bs";

import "./Header.scss";

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="header row g-0">
      {/* <div className="col-lg-1 col-md-9"> */}

      <div className="header-content ">
        <div
          onClick={() => props.handleToggle()}
          className={
            props.collapsed
              ? "left-header-collapsed cursors"
              : "left-header cursors"
          }
        >
          {/* {props.collapsed ? (
            <i className="bi bi-arrow-right arr"></i>
          ) : (
           null
          )} */}
          {props.title}
        </div>
        <div className="right-header">
          <div style={{ marginTop: "20px", marginRight: "10px" }}></div>

          <BsBellFill className="sideBar-icons icon-noti" />

          <p className="name mr-1">Hi John!</p>
          <div className="drop">
            <BsPersonCircle className="sideBar-icons" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
