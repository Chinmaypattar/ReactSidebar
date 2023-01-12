import React, { useState } from "react";

import "./Header.css";

export default function HeaderNew(props) {
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [isNoti, setIsNoti] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [isBookMark, setIsBookMark] = useState(false);
  const [propsArray, setPropsArray] = useState({});
  const [propObj, setPropsObj] = useState([]);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    if (!mobileMenu) {
      setSubMenu(false);
    }
  };

  const handleSubMenu = () => {
    setSubMenu(!subMenu);
  };
  return (
    <div className="dp-wrapper">
      <div className="dp-section" id="dp-section_content">
        <div className="dp-sction-data-1">
          <div className="dp-section-data-group-1">
            <div
              data-testid="menu-icon"
              onClick={() => props.handleToggle()}
              className="dp-menu-icon"
            ></div>
            <div className="dp-logo"></div>
            <div className="dp-breadcrumb"></div>
          </div>
        </div>
        <div className="dp-sction-data-2">
          <div className="dp-section-data-group-2">
            <div className="dp-right-icon-group">
              <div className="dp-date-time-marker">12:40 PM</div>
              <div id="clickbox" className="dp-notification-icon">
                {" "}
                <span className="dp-notification-count">0</span>
              </div>

              <div className="dp-user-name">Hi {userData.given_name}!</div>
              <div data-testid="user-profile" className="dp-profile-icon"></div>

              {anchorEl && (
                <>
                  <div className="dp-menu-box">
                    <p data-testid="my-profile" className="menu">
                      My Profile
                    </p>
                    <p data-testid="my-bookmark" className="menu">
                      My Bookmarks
                    </p>
                    <p data-testid="account-settings" className="menu">
                      Account Settings
                    </p>
                    {/* <p  onClick={handleLogout} className="menu"> */}
                    <p className="menu disabled-items">Logout</p>
                  </div>
                  {subMenu && (
                    <div className="dp-subMenu-box">
                      <p data-testid="show-bookmark" className="menu">
                        Show All
                      </p>
                      <p data-testid="add-bookmark" className="menu">
                        Bookmark this tab
                      </p>
                    </div>
                  )}
                </>
              )}
              {/*  */}
            </div>

            <div
              onClick={handleMobileMenu}
              className="dp-right-menu-icon"
            ></div>
            {false && (
              <>
                <div className="dp-mobile-menu">
                  <div className="dp-mobile-icon">
                    <div className="dp-profile-icon"></div>
                    <div className="dp-user-name">
                      Hi {userData.given_name}!
                    </div>
                  </div>

                  <div className="dp-date-time-marker">Date/Time:11:00 AM</div>
                  <p className="menu">Notification</p>
                  <p
                    onClick={() =>
                      props.history.push({
                        pathname: `user/${userData.user_id}`,
                        state: {
                          isProfile: true,
                        },
                      })
                    }
                    className="menu"
                  >
                    My Profile
                  </p>
                  <p onClick={handleSubMenu} className="menu">
                    My Bookmarks
                  </p>

                  <p
                    onClick={() =>
                      props.history.push({
                        pathname: `tenant/${userData.tenant_id}`,
                        state: {
                          isProfile: true,
                        },
                      })
                    }
                    className="menu"
                  >
                    Account Settings
                  </p>
                  {/* <p onClick={handleLogout} className="menu"> */}
                  <p className="menu disabled-items">Logout</p>
                </div>

                {subMenu && (
                  <div className="dp-mobile-subMenu-box">
                    <p
                      onClick={() => props.history.push("/dashboard")}
                      className="menu"
                    >
                      Show All
                    </p>
                    <p className="menu">Bookmark this tab</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
