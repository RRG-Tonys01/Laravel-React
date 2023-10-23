import {Link, Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";

export default function DefaultLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();

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
       <aside className="col-2 bg-warning py-4 vh-100 d-flex flex-column">
          <div className="w-100 bg-light ps-4 mt-4 h-auto">
            <Link to="/dashboard" className="text-center fw-medium text-decoration-none fs-5 text-black">Dashboard</Link>
          </div>
          <Link to="/users">
            <div className="w-100 bg-light mt-4 px-4 h-auto">
              <p className="fw-medium text-decoration-none fs-5 text-black">Users</p>
            </div>
          </Link>
        </aside>
        <div className="col d-flex flex-column">
          <header>
            <div className="w-100 bg-light px-4 py-2 border-bottom border-black d-flex justify-content-between">
              <p className="fs-4 fw-light my-auto">Dashboard</p>
              <div className="d-flex py-2">
                <p className="mx-2 my-auto">{user.name} &nbsp; &nbsp;</p>
                <a onClick={onLogout} className="my-auto text-center text-decoration-none text-black" href="#">Logout</a>
              </div>
            </div>
          </header>
          <main className="col">
            <Outlet/>
          </main>
        </div>
    </div>
  )
}
