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
import ProtectedRoute from "./ProtectedRoute";
import PermissionRoute from "./PermissionRoute";
import Login from "../pages/Login";
import ChannelPartner from "../pages/ChannelPartner";
import ForgotPassword from "../pages/ForgetPassword";
import Leads from "../pages/Leads";
import { MENU_KEYS } from "../constant/modulesKey";
import RefferalChannelPartners from "../pages/RefferalChannelPartners";
import TotalChannelPartnersPage from "../pages/TotalChannelPartnersPage";
import CPProfileView from "../pages/CPProfileView";
import EditChannelPartner from "../pages/EditChannelPartner";


export default function AppRoutes() {
  return (
    <Routes>
       {/* Public Routes  */}
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/*  Dashboard (superuser or everyone can see) */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/*  Roles Module */}
          <Route
            path="/role"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.ROLE}>
                <RoleManagementPage />
              </PermissionRoute>
            }
          />
          <Route
            path="/role-info"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.ROLE}>
                <RoleInfoPage />
              </PermissionRoute>
            }
          />
          <Route
            path="/create-role"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.ROLE}>
                <RoleCreatePage />
              </PermissionRoute>
            }
          />
          <Route
            path="/role/edit/:uid"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.ROLE}>
                <RoleEditPage />
              </PermissionRoute>
            }
          />

          {/* Users Module */}
          <Route
            path="/user"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.USER}>
                <UserManagementPage />
              </PermissionRoute>
            }
          />
          <Route
            path="/user-info"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.USER}>
                <UserInfoPage />
              </PermissionRoute>
            }
          />
          <Route
            path="/edit-user"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.USER}>
                <UserEditPage />
              </PermissionRoute>
            }
          />
          <Route
            path="/create-user"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.USER}>
                <UserCreatePage />
              </PermissionRoute>
            }
          />
          <Route
            path="/leads"
            element={
              <PermissionRoute moduleKey={MENU_KEYS.LEADS}>
                <Leads />
              </PermissionRoute>
            }
          />
          <Route
            path="/refferal-channel-partners"
            element={
              <PermissionRoute moduleKey="refferal-channel-partners">
                <RefferalChannelPartners />
              </PermissionRoute>
            }
          />
          <Route
            path="/total-channel-partners"
            element={
              <PermissionRoute moduleKey="total-channel-partners">
                <TotalChannelPartnersPage/>
              </PermissionRoute>
            }
          />
          <Route
            path="/channel-partners-details"
            element={
              <PermissionRoute moduleKey="channel-partners-details">
                <CPProfileView/>
              </PermissionRoute>
            }
          />
          <Route
            path="/edit-channel-partner"
            element={
              <PermissionRoute moduleKey="edit-channel-partner">
                <EditChannelPartner/>
              </PermissionRoute>
            }
          />
          <Route
            path="/channel-partner"
            element={
              <PermissionRoute moduleKey="channel-partner">
                <ChannelPartner/>
              </PermissionRoute>
            }
          />
          
        </Route>
      </Route>

    
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}
