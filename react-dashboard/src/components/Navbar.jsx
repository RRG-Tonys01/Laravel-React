import React from "react";
import { Link } from "react-router-dom";
import image from "../ImageImporter";
import '../css/navbar.css';
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { FaUsers, FaTasks, FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar({currentPage, user}){
    return (
        <div className="navbar__brand">
          <div className="sidebar__brand">
            <div className="sidebar__header">
              <Link to="/dashboard">
                <img src={image.logoImage} alt="Logo Image"/>
                <h3>Control Panel</h3>
              </Link>
            </div>
          </div>

          <div className="line__break"></div>

          <div className="sidebar__profile">
            <div className="profile__image">
              <img src={image.RRG_User} alt="RRG User"></img>
            </div>
            <div className="user__profile">
              <p className="user__email">Username</p>
              <span>My Account</span>
            </div>
            <div className="user__dropdown">
              <FaChevronDown className="dropdown__icon"/>
            </div>
          </div>
          <div className="line__break"></div>

          <div className="sidebar__body">
            <p>Menu</p>
            <nav>
              <ul>
                <Link to="/dashboard" className="nav__item">
                  <IoHome className="nav__icon"/>
                  <li>Home</li>
                </Link>
                <Link to="/users" className="nav__item">
                  <FaUsers className="nav__icon"/>
                  <li>User</li>
                </Link>
                <Link to="/task" className="nav__item">
                  <FaTasks className="nav__icon"/>
                  <li>Task</li>
                </Link>
                <Link to="/profile" className="nav__item">
                  <FaUser className="nav__icon"/>
                  <li>Profile</li>
                </Link>
                <Link to="/settings" className="nav__item">
                  <IoSettingsSharp className="nav__icon"/>
                  <li>Settings</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
    )
}
