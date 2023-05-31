import { createBrowserRouter } from "react-router-dom";
import Secrate from "../components/Secrate";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Registration from "../Registration/Registration";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/secrate",
        element: (
          <PrivetRout>
            <Secrate></Secrate>
          </PrivetRout>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'mycarts',
        element: <MyCart></MyCart>
      }
    ]
  }
]);
