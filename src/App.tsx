import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import LoginPage from "@/domains/login/pages/LoginPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import PageA from "@/pages/PageA.tsx";
import PageB from "@/pages/PageB.tsx";
import MyPage from "@/pages/protected/MyPage.tsx";
import ProtectedRoute from "@/routes/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/page-a",
        element: <PageA />,
      },
      {
        path: "/page-b",
        element: <PageB />,
      },
      {
        path: "/my-page",
        element: <MyPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
