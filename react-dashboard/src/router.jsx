import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/Login";
import Users from "./views/User";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import Table from "./views/Table";
import Graph from "./views/Graph";
import Home from "./views/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard"/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/table',
        element: <Table/>
      },
      {
        path: '/graph',
        element: <Graph/>
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Login/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router;
