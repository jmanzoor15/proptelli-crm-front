import { MENU_KEYS } from "../constant/modulesKey";

export const menuItems = [
  { key: MENU_KEYS.DASHBOARD, icon: "/icons/dashboard.svg", label: "Dashboard", path: "/" },
  { key: MENU_KEYS.CHANNEL_PARTNERS, icon: "/icons/channel.svg", label: "Channel Partners", path: "/channel-partners" },
  { key: MENU_KEYS.LEADS, icon: "/icons/users.svg", label: "Leads", path: "/leads" },
  { key: MENU_KEYS.USER, icon: "/icons/users.svg", label: "User", path: "/user" },
  { key: MENU_KEYS.MODULE, icon: "/icons/users.svg", label: "Module", path: "/module" },
  { key: MENU_KEYS.BDM, icon: "/icons/bdm.svg", label: "BDM", path: "/bdm" },
  { key: MENU_KEYS.ROLE, icon: "/icons/bdm.svg", label: "ROLE", path: "/role" },
  { key: MENU_KEYS.ROLES, icon: "/icons/roles.svg", label: "Roles", path: "/roles", active: true },
];


  export  const appSubmenu = [
      {
        icon: "/icons/tutorial.svg",
        label: "Tutorials",
        path: "/tutorials",
      },
      {
        icon: "/icons/list.svg",
        label: "Requirement List",
        path: "/requirement-list",
      },
      {
        icon: "/icons/analytics.svg",
        label: "Video Analytics",
        path: "/video-analytics",
      },
      {
        icon: "/icons/help.svg",
        label: "Help Requests",
        path: "/help-requests",
      },
      {
        icon: "/icons/bug.svg",
        label: "Bugs & Features",
        path: "/bugs-features",
      },
      { icon: "/icons/faq.svg", label: "FAQ's", path: "/faqs" },
    ];
