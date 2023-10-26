import {Link, Navigate, Outlet,useLocation } from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";
import Navbar from "./Navbar";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();
  const location = useLocation();
  const pathname = location.pathname;

  // Split the pathname using '/' as the delimiter and get the last part
  const parts = pathname.split('/');
  const desiredPart = parts[parts.length - 1];

  if (!token) {
    return <Navigate to="/login"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
      })
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

  return (
    <div id="defaultLayout" className="container-fluid p-0 m-0 d-flex">
       <Navbar currentPage={desiredPart}/>
        <div className="col d-flex flex-column">
          <header className="w-100 bg-light px-4 py-1 my-1 border-bottom border-black d-flex justify-content-between">
            <p className="fs-4 fw-light my-auto" style={{textTransform: 'capitalize'}}>{desiredPart}</p>
            <div className="d-flex py-2">
              <p className="mx-2 my-auto">{user.name} &nbsp; &nbsp;</p>
              <a onClick={onLogout} className="my-auto text-center text-decoration-none text-black">Logout</a>
            </div>
          </header>
          <main className="col">
            <Outlet/>
          </main>
        </div>
    </div>
  )
}
