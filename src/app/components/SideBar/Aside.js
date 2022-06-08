import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { routes } from "../../Router/routeConfig";
import Header from "../Header/Header";
import newLogo from "../../assets/logo/datapelago-logo-white.png";
import "./Aside.scss";
import HeaderNew from "../Header/HeaderNew";

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
  navigate,
  active,
  heading,
}) => {
  const sidebardatafromRoute = routes.filter((item) => item.sideBarDetails);
  const [sidebardata, setDataChangeForSubmenu] = useState(sidebardatafromRoute);
  // console.log("DATA", sidebardata);

  const onopenChange = (element) => {
    // console.log("SUB MENU CLICKED", item);
    const data = sidebardata;
    console.log("SIDEBARDETAILS", data);
    data.map((item) => {
      if (item.sideBarDetails.title === element.title) {
        console.log("COMING", element);
        item.sideBarDetails.isSubMenuOpen = true;
      } else {
        item.sideBarDetails.isSubMenuOpen = false;
      }
    });
    console.log("After change", data);
    // setDataChangeForSubmenu()
  };

  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <div className="desktop">
        <Header
          title={heading}
          collapsed={collapsed}
          handleToggle={handleCollapsedChange}
        />
      </div>

      <SidebarContent>
        <Menu>
          {sidebardatafromRoute.map((item, index) => {
            return !item.sideBarDetails.isSubMenu ? (
              <MenuItem
                icon={item.sideBarDetails.icon}
                onClick={() => navigate(item.path)}
                className={
                  window.location.pathname === item.path ? "active" : "inactive"
                }
              >
                {item.sideBarDetails.title}
              </MenuItem>
            ) : (
              <SubMenu
                icon={item.sideBarDetails.icon}
                title={item.sideBarDetails.title}
                defaultOpen={item.sideBarDetails.isSubMenuOpen}
                onClick={() => onopenChange(item.sideBarDetails)}
              >
                {item.sideBarDetails.subMenu.map((submenuitem, index) => {
                  return (
                    <MenuItem
                      onClick={() => navigate(submenuitem.path)}
                      className={
                        window.location.pathname === submenuitem.path
                          ? "active"
                          : "inactive"
                      }
                    >
                      {submenuitem.title}
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
