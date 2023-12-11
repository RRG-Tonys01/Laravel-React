import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";

export default function Navbar({currentPage}){
    return (
        <div className="col-2 vh-100 fixed d-flex flex-column" style={{backgroundColor: "#04befe"}}>
          <div
            className="border-bottom border-black"
            style={{paddingBottom: "15px", paddingTop: "15px"}}
          >
            <p className="text-center fw-bolder fs-4 my-auto">Control Panel</p>
          </div>
          <div className="w-100 py-2 h-auto">
            <Link to='/dashboard' className="text-decoration-none text-black">
              <div className={currentPage === 'dashboard' ? 'd-flex px-4 mt-2 py-2 bg-light' : 'd-flex px-4 mt-2 py-2'}>
                <IoHome className="my-auto fs-5 fw-medium me-2"/>
                <p className="my-auto fs-5 fw-medium">Dashbord</p>
              </div>
            </Link>
            {/* <Link to='/users' className="text-decoration-none text-black">
               <div className={currentPage === 'users' ? 'd-flex px-4 mt-2 py-2 bg-light' : 'd-flex px-4 mt-2 py-2'}>
                <FaUsers className="my-auto fs-5 fw-medium me-2"/>
                <p className="my-auto fs-5 fw-medium">Users</p>
              </div>
            </Link> */}
            {/* <Link to='/table' className="text-decoration-none text-black">
             <div className={currentPage === 'table' ? 'd-flex px-4 mt-2 py-2 bg-light' : 'd-flex px-4 mt-2 py-2'}>
              <i className="fa-sharp fa-solid fa-table my-auto mx-2" style={{color: "#000000"}}></i>
              <p className="my-auto fs-5 fw-medium">Table</p>
            </div>
            </Link> */}
            {/* <Link to='/graph' className="text-decoration-none text-black">
             <div className={currentPage === 'graph' ? 'd-flex px-4 mt-2 py-2 bg-light' : 'd-flex px-4 mt-2 py-2'}>
              <i className="fa-sharp fa-solid fa-chart-simple my-auto mx-2" style={{color: "#000000"}}></i>
              <p className="my-auto fs-5 fw-medium">Graphics</p>
            </div>
            </Link> */}
          </div>
        </div>
    )
}
