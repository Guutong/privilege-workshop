import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";
import { createBrowserRouter, Navigate, RouterProvider, useLocation } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { CouponPage } from "./pages/CouponPage";
import { PrivilegePage } from "./pages/PrivilegePage";
import { UsersPage } from "./pages/UsersPage";
import { Layout } from "./components/Layout";
import { LogoutPage } from "./pages/LogoutPage";

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = localStorage.getItem('token');
  const location = useLocation();
  console.log(auth);
  
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RequireAuth><Layout /></RequireAuth>,
    errorElement: <>Page not found!</>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/privilege',
        element: <PrivilegePage />
      },
      {
        path: '/coupon',
        element: <CouponPage />
      },
      {
        path: '/users',
        element: <UsersPage />
      },
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/logout',
    element: <LogoutPage />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
