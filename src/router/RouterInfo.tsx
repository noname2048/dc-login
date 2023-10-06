import { ReactNode } from "react";

import LoginPage from "@/domains/login/pages/LoginPage";
import HomePage from "@/pages/HomePage.tsx";
import PageA from "@/pages/PageA.tsx";
import PageB from "@/pages/PageB.tsx";

type RouterItem = {
  path: string;
  element: ReactNode;
  type: "public" | "login" | "private";
  label: string;
};

const RouterInfo: RouterItem[] = [
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
];

export default RouterInfo;
export type { RouterItem };
