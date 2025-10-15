import { SidebarMenuButton } from "./buttons/SidebarMenuButton";
import { SidebarDropdownButton } from "./buttons/SidebarDropdownButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { icon: "/icons/dashboard.svg", label: "Dashboard", path: "/" },
    {
      icon: "/icons/channel.svg",
      label: "Channel Partners",
      path: "/channel-partners",
    },
    { icon: "/icons/users.svg", label: "Leads", path: "/leads" },
    { icon: "/icons/bdm.svg", label: "BDM", path: "/bdm" },
    {
      icon: "/icons/roles.svg",
      label: "Roles",
      path: "/roles",
      active: true,
    },
  ];

  const appSubmenu = [
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

  useEffect(() => {
    const foundIndex = menuItems.findIndex((item) => item.path === location.pathname);
    if (foundIndex !== -1) {
      setActiveIndex(foundIndex);
    }
  }, [location.pathname]);

  function onNavigate(path, index) {
    setActiveIndex(index);
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      onClose();
    }
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-[258px] bg-greywhite border-r border-gray-200 flex flex-col h-full
        md:relative md:translate-x-0
        fixed top-0 left-0 z-50 transition-transform duration-300 overflow-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-start p-4">
          <button onClick={onClose} className="p-2">
            <img src="src/assets/icons/back-icon.svg" alt="back"/>
          </button>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-10">
            {menuItems.map((item, index) => (
              <li key={index}>
                <SidebarMenuButton
                  active={activeIndex === index}
                  onClick={() => onNavigate(item.path, index)}
                  label={item.label}
                  icon={item.icon}
                />
              </li>
            ))}
            {/* App Dropdown */}
            <SidebarDropdownButton
              icon={"/icons/app.svg"}
              label="App"
              submenuItems={appSubmenu}
              defaultOpen={false}
            />
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="px-4 py-4 border-t border-gray-200 space-y-10">
          <SidebarMenuButton
            label={"Switch User"}
            icon={"/icons/switch-user.svg"}
          />
          <SidebarMenuButton
            label={"Logout"}
            icon={"/icons/logout.svg"}
          />
        </div>

        {/* Footer */}
        <div className="px-4 py-3 text-center">
          <p className="text-xs text-gray-400">© 2025 Proptelli.COM</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;