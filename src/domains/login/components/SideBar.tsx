import React from "react";

import { SidebarItem } from "@/domains/login/models/SidebarItem.ts";
import RouterInfo, { RouterItem } from "@/router/RouterInfo.tsx";

type SidebarProps = {
  isLogin: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isLogin }) => {
  const sidebarItems: SidebarItem[] = React.useMemo(() => {
    return RouterInfo.reduce((prev: SidebarItem[], current: RouterItem) => {
      if (isLogin && current.type === "private") {
        return [
          ...prev,
          {
            path: current.path,
            label: current.label,
          },
        ];
      } else if (
        !isLogin &&
        (current.type === "public" || current.type === "login")
      ) {
        return [
          ...prev,
          {
            path: current.path,
            label: current.label,
          },
        ];
      }
      return prev;
    }, []);
  }, [isLogin]);

  return (
    <div>
      {sidebarItems.map((item) => (
        <a key={item.label} href={item.path}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
