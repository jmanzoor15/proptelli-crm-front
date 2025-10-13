import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { getFormattedPathName } from "../utils/commonFunctions";

export default function MainLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;
  const exclude = ["users", "roles"];
  const pageTitle = getFormattedPathName(currentPath, exclude);

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
