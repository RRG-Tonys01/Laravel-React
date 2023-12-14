import React from "react";
import { Link } from "react-router-dom";
import image from "../ImageImporter";
import '../css/navbar.css';
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaUsers, FaTasks, FaUser } from "react-icons/fa";

export default function Navbar({currentPage}){
    return (
        <div className="navbar__brand">
          <div className="sidebar__brand">
            <div className="sidebar__header">
              <Link>
                <span>Control Panel</span>
              </Link>
            </div>
            <div className="sidebar__body">
              <nav>
                <ul>
                  <Link to="/dashboard" className="nav__item">
                    <IoHome className="nav__icon"/>
                    <li>Home</li>
                  </Link>
                  <Link className="nav__item">
                    <FaUsers className="nav__icon"/>
                    <li>User</li>
                  </Link>
                  <Link className="nav__item">
                    <FaTasks className="nav__icon"/>
                    <li>Task</li>
                  </Link>
                  <Link className="nav__item">
                    <FaUser className="nav__icon"/>
                    <li>Profile</li>
                  </Link>
                  <Link className="nav__item">
                    <IoSettingsSharp className="nav__icon"/>
                    <li>Settings</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    )
}
