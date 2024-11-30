import { Navigate, Outlet } from "react-router-dom";

// ProtectedLayout: 인증 여부를 확인하고 모든 하위 경로를 보호
const ProtectedLayout = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; // 인증되었으면 하위 라우트를 렌더링
};

export default ProtectedLayout;
