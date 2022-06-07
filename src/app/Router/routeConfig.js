

import NotFound from "../pages/NotFound/NotFound";

import {
  BsColumnsGap,
  BsBroadcast,
  BsJournals,
  BsFillPeopleFill,
  BsSpeedometer,
  BsFileEarmarkText
} from "react-icons/bs";
import { RiListSettingsLine } from "react-icons/ri";

export const routes = [

  {
    path: "/dashboard",
 
    sideBarDetails: {
      title: "Dashboard",
      icon: <BsSpeedometer className="sideBar-icons" />,
      isSubMenu: false,
    },
  },
  {
    path: "/cluster",
   
    sideBarDetails: {
      title: "Clusters",
      icon: <BsBroadcast className="sideBar-icons" />,
      isSubMenu: false,
    },
  },
  {
    path: "/jobs",
  
    sideBarDetails: {
      title: "Jobs",
      icon: <BsFileEarmarkText className="sideBar-icons" />,
      isSubMenu: false,
    },
  },
  {
    path: "/orders-hub",
    sideBarDetails: {
      title: "Administration",
      icon: <BsFillPeopleFill className="sideBar-icons" />,
      isSubMenu: true,
      subMenu: [
        {
          title: "Teanant",
          path: "/teanant",
          Component: "",
        },
        {
          title: "Users",
          path: "/users",
          Component: "",
        },
        {
          title: "Roles",
          path: "/roles",
          Component: "",
        },
        {
          title: "Data Sources",
          path: "/datasources",
          Component: "",
        },

        {
          title: "All Resources",
          path: "/allresources",
          Component: "",
        },
      
      ],
    },
  },
  // {
  //   path: "/Menu Hub",
  //   sideBarDetails: {
  //     title: "Menu Hub",
  //     icon: <BsMenuUp className="sideBar-icons" />,
  //     isSubMenu: true,
  //     subMenu: [
  //       {
  //         title: "Menu List",
  //         path: "/menu-list",
  //         Component: "",
  //       },
  //       {
  //         title: "Item List",
  //         path: "/item-list",
  //         Component: "",
  //       },
  //       {
  //         title: "Menu Scheduling",
  //         path: "/Menu-Scheduling",
  //         Component: "MenuScheduling",
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: "/Marketing Hub",
  //   sideBarDetails: {
  //     title: "Marketing Hub",
  //     icon: <BsMegaphone className="sideBar-icons" />,
  //     isSubMenu: true,
  //     subMenu: [
  //       {
  //         title: "Discounts",
  //         path: "/discount",
  //         Component: "Discount",
  //       },
  //       {
  //         title: "Sales Channels",
  //         path: "/sales-channels",
  //         Component: "",
  //       },
  //       {
  //         title: "Instagram & Facebook shops",
  //         path: "/instgram-facebook-shops",
  //         Component: "",
  //       },
  //       {
  //         title: "Automatic Reactivation",
  //         path: "/automatic-reactivation",
  //         Component: "",
  //       },
  //       {
  //         title: "Customer",
  //         path: "/customer",
  //         Component: "",
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: "/abc",
  //   sideBarDetails: {
  //     title: "Automation Hub",
  //     icon: <RiListSettingsLine className="sideBar-icons" />,
  //     isSubMenu: true,
  //     subMenu: [
  //       {
  //         title: "QR Codes",
  //         path: "/qrcodes",
  //         Component: "",
  //       },
  //       {
  //         title: "Text Messaging/ SMS Automation",
  //         path: "/text-messaging-sms-automation",
  //         Component: "",
  //       },
  //       {
  //         title: "Flat discount of order",
  //         path: "/flat-discount-of-order",
  //         Component: "MenuScheduling",
  //       },
  //       {
  //         title: "Email Marketing Automation",
  //         path: "/email-marketing-automation",
  //         Component: "MenuScheduling",
  //       },
  //       {
  //         title: "Specific Item Discount",
  //         path: "/specific-item-discount",
  //         Component: "MenuScheduling",
  //       },
  //       {
  //         title: "Free Delivery Offers",
  //         path: "/free-delivery-offers",
  //         Component: "MenuScheduling",
  //       },
  //       {
  //         title: "Loyalty Rewards",
  //         path: "/loyalty-rewards",
  //         Component: "MenuScheduling",
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: "operationsHub",
  //   sideBarDetails: {
  //     title: "Operations Hub",
  //     icon: <BsDiagram2 style={{ fontSize: "30px" }} />,
  //     isSubMenu: true,
  //     subMenu: [
  //       {
  //         title: "Activity Logs",
  //         path: "/activity-logs",
  //         Component: "ActivityLogs",
  //       },
  //       {
  //         title: "Snoozing Items",
  //         path: "/snoozing-items",
  //         Component: "",
  //       },
  //       {
  //         title: "Managing Store Timing",
  //         path: "/managing-store-timing",
  //         Component: "",
  //       },
  //       {
  //         title: "Product Sync with Pos",
  //         path: "/product-sync-with-pos",
  //         Component: "MenuScheduling",
  //       },
  //       {
  //         title: "Product Inventory",
  //         path: "/product-inventory",
  //         Component: "MenuScheduling",
  //       },
  //     ],
  //   },
  // },

  // {
  //   path: "/indbox",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     title: "Inbox",
  //     icon: <BsChatDots className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
  //   path: "/report",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     title: "Report",
  //     icon: <BsReceipt className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
  //   path: "/payment",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     title: "Payment",
  //     icon: <BsCashStack className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
  //   path: "/media",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     isFooterMenu: true,
  //     title: "Media",
  //     icon: <BsImages className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
  //   path: "/help",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     isFooterMenu: true,
  //     title: "Help",
  //     icon: <BsQuestionCircle className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
  //   path: "/users",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     isFooterMenu: true,
  //     title: "Users",
  //     icon: <BsPeople className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
  //   path: "/settings",
  //   sideBarDetails: {
  //     title: "settings",
  //     icon: <BsGear className="sideBar-icons" />,
  //     isSubMenu: true,
  //     subMenu: [
  //       {
  //         title: "outlets",
  //         path: "/outlets",
  //         Component: "Outlets",
  //       },
  //       {
  //         title: "branding",
  //         path: "/branding",
  //         Component: "Branding",
  //       },
  //       {
  //         title: "Business Settings",
  //         path: "/Business-Settings",
  //         Component: "BusinessSettings",
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: "/logout",
  //   component: Dashboard,
  //   sideBarDetails: {
  //     isFooterMenu: true,
  //     title: "Logout",
  //     icon: <BsPower className="sideBar-icons" />,
  //     isSubMenu: false,
  //   },
  // },
  // {
    {
    path: "*",
    component: NotFound,
  },
];
