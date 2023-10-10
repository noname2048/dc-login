import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isLoginSelector } from "@/recoil/TokenAtom.ts";

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();
  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ redirectedFrom: currentLocation }} />
  );
};

export default ProtectedRoute;
