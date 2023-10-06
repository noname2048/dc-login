import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { LoginStateAtom } from "@/recoil/LoginStateAtom.ts";

interface AuthorizationProps {
  children: React.ReactNode;
}

/** Login 이 되어있는지 검사하여, 로그인이 안되어있을 경우 로그인 페이지로 리다이렉트 */
const Authorization: React.FC<AuthorizationProps> = ({ children }) => {
  const loginState = useRecoilValue(LoginStateAtom);
  if (!loginState.isLogin) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default Authorization;
