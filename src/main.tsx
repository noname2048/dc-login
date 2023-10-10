import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Authorization from "@/domains/login/components/Authorization.tsx";
import { worker } from "@/mocks/browser";
import RouterInfo from "@/router/RouterInfo.tsx";

import "./global.css";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const router = createBrowserRouter(
  RouterInfo.map((routerInfo) => {
    return routerInfo.type === "private"
      ? {
          path: routerInfo.path,
          element: <Authorization>{routerInfo.element}</Authorization>,
        }
      : {
          path: routerInfo.path,
          element: routerInfo.element,
        };
  }),
);

console.log(router);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
