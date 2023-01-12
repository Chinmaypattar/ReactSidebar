import React, { useEffect, useState } from "react";
import { getSessionStorage } from "../../utils/storageFunction";
import "./Footer.scss";
const Footer = () => {
  const [config, setConfig] = useState({});
  // debugger

  // console.log("BUILD",config);
  return (
    <div className="footer-main">
      <p style={{ textAlign: "left", marginRight: "1rem" }}>
        Version 1.0{" "}
        <span style={{ marginLeft: "10px" }}>
          {" "}
          Build No {config && config.REACT_APP_BUILD}{" "}
        </span>
        <span style={{ marginLeft: "10px" }}>© 2022, DataPelago, Inc.</span>
      </p>
    </div>
  );
};

export default Footer;
