import { SidebarMenuButton } from "./buttons/SidebarMenuButton";
import { SidebarDropdownButton } from "./buttons/SidebarDropdownButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { appSubmenu, menuItems } from "../constant/modules";

const Sidebar = ({ isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, permissions } = useAuthStore();

  // All available menu items
  const allMenuItems = useMemo(() => menuItems, []);

  // Filter allowed items — but always include Dashboard
  const allowedMenuItems = useMemo(() => {
    if (!permissions || Object.keys(permissions).length === 0)
      return allMenuItems.filter((item) => item.key === "dashboard");

    // Superuser → show all
    if (permissions?.user?.module?.access_level === "ALL")
      return allMenuItems;

    return allMenuItems.filter(
      (item) => item.key === "dashboard" || permissions[item.key]
    );
  }, [permissions, allMenuItems]);

 
 useEffect(() => {
  // Always find the correct active item from allowedMenuItems (not full menuItems)
  const foundIndex = allowedMenuItems.findIndex(
    (item) =>
      item.path === location.pathname ||
      (location.pathname === "/" && item.key === "dashboard") ||
      (location.pathname === "/dashboard" && item.key === "dashboard")
  );

  if (foundIndex !== -1) {
    setActiveIndex(foundIndex);
  } else {
    // If redirected to dashboard or invalid route, set dashboard as active
    const dashboardIndex = allowedMenuItems.findIndex(
      (item) => item.key === "dashboard"
    );
    if (dashboardIndex !== -1) {
      setActiveIndex(dashboardIndex);
    }
  }
}, [location.pathname, allowedMenuItems]);

  function onNavigate(path, index) {
    setActiveIndex(index);
    navigate(path);
    if (window.innerWidth < 768) {
      onClose();
    }
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
    if (window.innerWidth < 768) onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={`w-[258px] bg-greywhite border-r border-gray-200 flex flex-col h-full
        md:relative md:translate-x-0 fixed top-0 left-0 z-50 transition-transform duration-300 overflow-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Back button on mobile */}
        <div className="md:hidden flex justify-start p-4">
          <button onClick={onClose} className="p-2">
            <img src="/icons/back-icon.svg" alt="back" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-10">
            {allowedMenuItems.map((item, index) => (
              <li key={index}>
                <SidebarMenuButton
                  active={activeIndex === index}
                  onClick={() => onNavigate(item.path, index)}
                  label={item.label}
                  icon={item.icon}
                />
              </li>
            ))}

            {/* Dropdown Example */}
            <SidebarDropdownButton
              icon={"/icons/app.svg"}
              label="App"
              submenuItems={appSubmenu}
            />
          </ul>
        </nav>

        {/* Footer section */}
        <div className="px-4 py-4 border-t border-gray-200 space-y-10">
          <SidebarMenuButton label={"Switch User"} icon={"/icons/switch-user.svg"} />
          <SidebarMenuButton onClick={handleLogout} label={"Logout"} icon={"/icons/logout.svg"} />
        </div>

        <div className="px-4 py-3 text-center">
          <p className="text-xs text-gray-400">© 2025 Proptelli.COM</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
