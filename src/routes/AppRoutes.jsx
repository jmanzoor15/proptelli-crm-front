import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import RoleManagementPage from "../pages/RoleManagementPage";
import Dashboard from "../pages/Dashboard";
import RoleInfoPage from "../pages/RoleInfoPage";
import RoleCreatePage from "../pages/RoleCreatePage";
import RoleEditPage from "../pages/RoleEditPage";
import UserManagementPage from "../pages/UserManagementPage";
import UserInfoPage from "../pages/UserInfoPage";
import UserEditPage from "../pages/UserEditPage";
import UserCreatePage from "../pages/UserCreatePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roles" element={<RoleManagementPage />} />
        <Route path="/role-info" element={<RoleInfoPage />} />
        <Route path="/create-role" element={<RoleCreatePage />} />
        <Route path="/role-edit" element={<RoleEditPage />} />
        <Route path="/users" element={<UserManagementPage />} />
        <Route path="/user-info" element={<UserInfoPage />} />
        <Route path="/edit-user" element={<UserEditPage />} />
        <Route path="/create-user" element={<UserCreatePage />} />
      </Route>

      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
