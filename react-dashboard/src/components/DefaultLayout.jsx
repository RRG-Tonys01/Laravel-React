import {Link, Navigate, Outlet,useLocation } from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import {useState, useEffect} from "react";
import Navbar from "./Navbar";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();
  const [timeOfDay, setTimeOfDay] = useState('');
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
      });

    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 4 && currentHour < 12) {
      setTimeOfDay('Morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setTimeOfDay('Afternoon');
    } else if (currentHour >= 17 && currentHour < 21) {
      setTimeOfDay('Evening');
    } else {
      setTimeOfDay('Night');
    }
  }, [])

  return (
    <div id="defaultLayout" className="container-fluid p-0 m-0 d-flex">
       <Navbar currentPage={desiredPart}/>
        <div className="col d-flex flex-column">
          <header className="w-100 bg-light px-4 py-2 my-1 border-bottom border-black d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p className="fs-5 fw-light my-auto"> <span style={{color: "#4d84e2"}}>Good {timeOfDay}</span>, {user.name}!</p>
              <p className="m-0 fs-6 fw-light" style={{color: "grey"}}>Your Performance this Week</p>
            </div>
            <div className="d-flex py-2">
              <div class="dropdown my-auto">
                <button class="btn btn-sm dropdown-toggle border-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Category
                </button>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item">Action</a></li>
                  <li><a class="dropdown-item">Another action</a></li>
                  <li><a class="dropdown-item">Something else here</a></li>
                </ul>
              </div>
              <a onClick={onLogout} className="ms-4 my-auto text-center text-decoration-none text-black">Logout</a>
            </div>
          </header>
          <main className="col">
            <Outlet/>
          </main>
        </div>
    </div>
  )
}
