import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard(){
  const { user } = useOutletContext()
  const [timeOfDay, setTimeOfDay] = useState('');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  // const location = useLocation();
  // const pathname = location.pathname;


  // const parts = pathname.split('/');
  // const desiredPart = parts[parts.length - 1];

  useEffect(() => {
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


  // const onLogout = ev => {
  //   ev.preventDefault()

  //   axiosClient.post('/logout')
  //     .then(() => {
  //       setUser({})
  //       setToken(null)
  //     })
  // }

  return (
    <div className="container-fluid p-0 m-0 d-flex">
       <Navbar currentPage={"dashboard"}/>
        <div className="col d-flex flex-column">
          <header
            className="w-100 bg-light px-4 my-1 border-bottom border-black d-flex justify-content-between"
            style={{paddingBottom: "4px", paddingTop: "4px"}}
          >
            <div className="d-flex flex-column">
              <p className="fs-5 fw-light my-auto"> <span style={{color: "#4d84e2"}}>Good {timeOfDay}</span>, {user.employee_name}</p>
              <p className="m-0 fs-6 fw-light" style={{color: "grey"}}>Your Performance this Week</p>
            </div>
            <div className="d-flex py-2">
              <div className="dropdown my-auto">
                <button className="btn btn-sm dropdown-toggle border-black" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Category
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a className="dropdown-item">Action</a></li>
                  <li><a className="dropdown-item">Another action</a></li>
                  <li><a className="dropdown-item">Something else here</a></li>
                </ul>
              </div>
              {/* <a onClick={onLogout} className="ms-4 my-auto text-center text-decoration-none text-black">Logout</a> */}
            </div>
          </header>

          <main>
            <div className="container-fluid p-0 m-0 d-flex">
              <div className="container py-2 my-1">
                <div className="row d-flex border-bottom border-light">
                  <div className="col-6">
                    <div className="d-flex float-start">
                      <div className="border-end border-light p-2">
                        <p className="my-auto fw-lighter fs-6">Overview</p>
                      </div>
                      <div className="border-end border-light p-2">
                        <p className="my-auto fw-lighter fs-6">Audiences</p>
                      </div>
                      <div className="border-end border-light p-2">
                        <p className="my-auto fw-lighter fs-6">Demographics</p>
                      </div>
                      <div className="border-light p-2">
                        <p className="my-auto fw-lighter fs-6">More</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex float-end">
                      <div className="border-end border-light p-2">
                        <p className="my-auto fw-lighter fs-6">Overview</p>
                      </div>
                      <div className="border-end border-light p-2">
                        <p className="my-auto fw-lighter fs-6">Audiences</p>
                      </div>
                      <div className="border-end border-light p-2">
                        <p className="my-auto fw-lighter fs-6">Demographics</p>
                      </div>
                      <div className="border-light p-2">
                        <p className="my-auto fw-lighter fs-6">More</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </main>
        </div>
    </div>
  )
}
