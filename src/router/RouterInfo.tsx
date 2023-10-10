// Deprecated
import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

import Authorization from "@/domains/login/components/Authorization.tsx";
import LoginPage from "@/domains/login/pages/LoginPage";
import HomePage from "@/pages/HomePage.tsx";
import PageA from "@/pages/PageA.tsx";
import PageB from "@/pages/PageB.tsx";
import MyPage from "@/pages/protected/MyPage.tsx";

type RouteItem = {
  path: string;
  element: ReactNode;
  type: "public" | "login" | "private";
  label: string;
};

const route: RouteItem[] = [
  {
    path: "/",
    element: <HomePage />,
    type: "public",
    label: "홈",
  },
  {
    path: "/login",
    element: <LoginPage />,
    type: "login",
    label: "로그인",
  },
  {
    path: "/page-a",
    element: <PageA />,
    type: "private",
    label: "페이지 A",
  },
  {
    path: "/page-b",
    element: <PageB />,
    type: "private",
    label: "페이지 B",
  },
  {
    path: "my-page",
    element: <MyPage />,
    type: "private",
    label: "마이 페이지",
  },
];

const RouterInfo = createBrowserRouter(
  route.map((item) => {
    if (item.type === "private") {
      return {
        path: item.path,
        element: <Authorization>{item.element}</Authorization>,
      };
    }
    return { path: item.path, element: <>{item.element}</> };
  }),
);

export default RouterInfo;
export type { RouteItem };
