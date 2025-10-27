import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function PermissionRoute({ moduleKey, children }) {
  const { permissions, user } = useAuthStore();
 
  // Superusers always have access
  if (user?.is_superuser) return children;


  // If the module isn't in permissions → block
  if (!permissions || !permissions[moduleKey]) {
    
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
