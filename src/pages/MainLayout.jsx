import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { getFormattedPathName } from "../utils/commonFunctions";
// import useAuthStore from "../store/useAuthStore";
// import { menuItems } from "../constant/modules"; 

export default function MainLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();
  // const { user, permissions } = useAuthStore();

  const currentPath = location.pathname;
  const exclude = ["users", "roles"];
  const pageTitle = getFormattedPathName(currentPath, exclude);

  // Create a map from menuItems: { user: '/user', role: '/role', ... }
  // const modulePathMap = useMemo(() => {
  //   const map = {};
  //   menuItems.forEach((item) => {
  //     if (item.key && item.path) {
  //       map[item.key] = item.path;
  //     }
  //   });
  //   return map;
  // }, []);

  // useEffect(() => {
  //   if (!user) return; // wait until user data is loaded
  //   if (!permissions || Object.keys(permissions).length === 0) return;

  //   //  Superuser can access everything
  //   if (user?.is_superuser) return;

  //   //  Dashboard is common to all — no restriction
  //   if (currentPath.startsWith("/dashboard")) return;

  //   const allowedModules = Object.keys(permissions || {});

  //   // Check if the current route matches any allowed module
  //   const currentAllowed = allowedModules.some((key) => {
  //     const modulePath = modulePathMap[key];
    
      
  //     return modulePath && currentPath.startsWith(modulePath);
  //   });


  
  //   // If not allowed, redirect to dashboard
  //   if (!currentAllowed) {
  //     navigate("/dashboard", { replace: true });
  //   }
  // }, [user, permissions, currentPath, navigate, modulePathMap]);

  return (
    <div className="flex flex-col h-screen">
      <Header
        pageTitle={pageTitle}
        onMenuClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      <div className="flex flex-1 overflow-auto">
        <Sidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1 bg-white overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
