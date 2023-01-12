import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { routes } from "../../Router/routeConfig";
import "./Aside.scss";
import "./SideBar.scss";
import HeaderNew from "../Header/HeaderNew";
import Header from "../Header/Header";

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
  crumbs,
  history,
}) => {
  const sidebardatafromRoute = routes.filter((item) => item.sideBarDetails);
  const [sidebardata] = useState(sidebardatafromRoute);

  const onopenChange = (element) => {
    console.log("admin clicked");
    const data = sidebardata;
    data.forEach((item) => {
      if (item.sideBarDetails.title === element.title) {
        item.sideBarDetails.isSubMenuOpen = !item.sideBarDetails.isSubMenuOpen;
      } else {
        item.sideBarDetails.isSubMenuOpen = false;
      }
    });
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
        {/* <HeaderNew
          crumbs={crumbs}
          history={history}
          title={heading}
          collapsed={collapsed}
          handleToggle={handleCollapsedChange}
        /> */}
        <Header
          crumbs={crumbs}
          history={history}
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
                key={index}
                icon={item.sideBarDetails.icon}
                onClick={() => navigate(item.path)}
                className={
                  window.location.hash.includes(item.hashPath)
                    ? "active"
                    : "inactive"
                }
              >
                {item.sideBarDetails.title}
              </MenuItem>
            ) : (
              <SubMenu
                key={index}
                icon={item.sideBarDetails.icon}
                title={item.sideBarDetails.title}
                defaultOpen={item.sideBarDetails.isSubMenuOpen}
                onOpenChange={() => onopenChange(item.sideBarDetails)}
              >
                {item.sideBarDetails.subMenu.map((submenuitem, index) => {
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => navigate(submenuitem.path)}
                      className={
                        window.location.hash.includes(submenuitem.hashPath)
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
