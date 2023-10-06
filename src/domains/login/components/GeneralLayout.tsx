import React, { ReactNode } from "react";
import { useRecoilValue } from "recoil";

import Sidebar from "@/domains/login/components/SideBar.tsx";
import { LoginStateAtom } from "@/recoil/LoginStateAtom.ts";

type AuthorizationProps = {
  children?: ReactNode;
  withLogin?: boolean | undefined;
};

const GeneralLayout: React.FC<AuthorizationProps> = ({ children }) => {
  const loginState = useRecoilValue(LoginStateAtom);
  return (
    <div>
      <nav>WANTED PRE-ONBOARDING</nav>
      <div>
        <Sidebar isLogin={loginState.isLogin} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default GeneralLayout;
