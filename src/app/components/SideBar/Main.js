import React from "react";
// import { useIntl } from 'react-intl';

import { FaHeart, FaBars } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import reactLogo from './assets/logo.svg';
import fostrrFav from "../../assets/logo/fav.png";
const Main = (props) => {
  //   const intl = useIntl();
  return (
    <main style={{ padding: "0px", height: "100vh" }}>
      {window.innerWidth < 768 ? (
        <div className="header row">
          <div className="header-content ">
            <div
              className="btn-toggle"
              onClick={() => props.handleToggleSidebar(true)}
            >
              {props.toggled ? (
                <div class="brand-logo ">
                  <img
                    src={fostrrFav}
                    style={{
                      height: "30px",
                      width: "30px",
                    }}
                    alt=""
                    onClick={() => props.handleToggleSidebar(true)}
                  />
                  <i className="bi bi-arrow-right  "></i>
                </div>
              ) : (
                <div class="brand-logo ">
                  <img
                    src={fostrrFav}
                    style={{
                      height: "30px",
                      width: "30px",
                    }}
                    alt=""
                  />{" "}
                  <FaBars style={{ marginLeft: "10px", marginTop: "6px" }} />
                </div>
              )}
            </div>
            <div className="right-header">
              <i className="bi bi-bell-fill icon-noti" aria-hidden="true"></i>
              <span className="loader"></span>

              <p className="usnNo">2e0c</p>
              <div className="drop">
                <i class="bi bi-caret-down-fill"></i>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* <Header /> */}
      <div class="content">{props.children}</div>

      {/* <Footer /> */}
    </main>
  );
};

export default Main;
