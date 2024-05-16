import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error.jsx';
import DashboardPage from './pages/dashboard.jsx';
import LandingPage from './pages/landingpage.jsx';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    errorElement: <ErrorPage/>
  },
  {
  path: "/landingPage",
    element: <LandingPage/>
  },
  {
    path: "/loginPage",
      element: <LoginPage/>
    },
    {
      path: "/registerPage",
        element: <RegisterPage/>
      },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);