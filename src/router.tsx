import { createBrowserRouter } from "react-router-dom";

import Login from "./app/auth/login/login";
import Dashboard  from "./app/dashboard";

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);