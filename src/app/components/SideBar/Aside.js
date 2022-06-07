import React, { useState } from "react";

import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { routes } from "../../Router/routeConfig";
import Header from "../Header/Header";
import newLogo from "../../assets/logo/datapelago-logo-white.png";
import "./Aside.scss";

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
  navigate,
  active,
  heading
}) => {
  const sidebardatafromRoute = routes.filter(item => item.sideBarDetails);
  const [sidebardata, setDataChangeForSubmenu] = useState(sidebardatafromRoute);
  // console.log("DATA", sidebardata);

  const onopenChange = element => {
    // console.log("SUB MENU CLICKED", item);
    const data = sidebardata;
    console.log("SIDEBARDETAILS", data);
    data.map(item => {
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
    <ProSidebar rtl={rtl} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
      {window.innerWidth > 768 ? (
        <>
          <Header title={heading} collapsed={collapsed} handleToggle={handleCollapsedChange} />
          <SidebarHeader>
            <div style={{ position: "fixed", marginLeft: "10px", marginTop: "5px" }} class="brand-logo ">
              {/* <img
                  src={newLogo}
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "3px",
                    marginBottom: "5px",
                    marginTop: "6px",
                  }}
                  alt=""
                />{" "} */}
              <i onClick={handleCollapsedChange} className="bi bi-list hamburger"></i>

              <span class="brand-title">
                <img
                  src={newLogo}
                  alt=""
                  style={{ height: "39px", width: "119px", marginTop: "-13px", marginLeft: "12px" }}
                  className={collapsed ? "logoHidden" : "logoShow"}
                />
              </span>
            </div>
          </SidebarHeader>
        </>
      ) : (
        ""
      )}
      <SidebarContent>
        <Menu>
          {sidebardatafromRoute.map((item, index) => {
            return !item.sideBarDetails.isSubMenu ? (
              <MenuItem
                icon={item.sideBarDetails.icon}
                onClick={() => navigate(item.path)}
                className={window.location.pathname === item.path ? "active" : "inactive"}
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
                      className={window.location.pathname === submenuitem.path ? "active" : "inactive"}
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
