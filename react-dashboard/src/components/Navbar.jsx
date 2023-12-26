import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';
import { IoSettingsSharp, IoDocumentTextOutline } from "react-icons/io5";
import { FaUsers, FaUserTag} from "react-icons/fa";
import {
  MdDashboard,
  MdOutlinePermMedia,
  MdSecurity,
  MdOutlineImportExport,
  MdOutlineSupportAgent
} from "react-icons/md";
import { VscGraphLine, VscRunErrors } from "react-icons/vsc";
import { TbChartInfographic } from "react-icons/tb";
import { PiArticleMediumLight, PiUserList } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { LuPalette, LuDatabaseBackup } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiDatabase } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";


export default function Navbar({currentPage}){
    return (
      <div className="navbar__brand">
        <div className="navbar__header">
          <p>Control Panel</p>
        </div>

        <div className="navbar__wrapper">
          <div className="navbar__category">
            <p className="category__name">Main</p>
            <nav>
              <ul>
                <Link
                  to="/dashboard"
                  className={currentPage === 'dashboard' ? 'list__item active' : 'list__item'}
                >
                  <MdDashboard className="list__icon"/>
                  <li>Dashboard</li>
                </Link>
                {/* <Link to="/dashboard" className="list__item">
                  <VscGraphLine  className="list__icon"/>
                  <li>Statistics</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                  <TbChartInfographic className="list__icon"/>
                  <li>Analytics</li>
                </Link> */}
              </ul>
            </nav>
          </div>

          <div className="navbar__category">
            <p className="category__name">Management</p>
            <nav>
              <ul>
                <Link
                  to="/users"
                  className={currentPage === 'users' ? 'list__item active' : 'list__item'}
                >
                    <FaUsers className="list__icon"/>
                    <li>Users</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <PiArticleMediumLight className="list__icon"/>
                    <li>Articles</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <BiSolidCategoryAlt className="list__icon"/>
                    <li>Categories</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <FaUserTag className="list__icon"/>
                    <li>Tags</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <MdOutlinePermMedia className="list__icon"/>
                    <li>Media</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className="navbar__category">
            <p className="category__name">Settings</p>
            <nav>
              <ul>
                <Link to="/dashboard" className="list__item">
                    <IoSettingsSharp className="list__icon"/>
                    <li>General Settings</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <MdSecurity className="list__icon"/>
                    <li>Security</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <LuPalette className="list__icon"/>
                    <li>Appereance</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <IoMdNotificationsOutline className="list__icon"/>
                    <li>Notifications</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className="navbar__category">
            <p className="category__name">Reports</p>
            <nav>
              <ul>
                <Link to="/dashboard" className="list__item">
                    <HiOutlineDocumentReport className="list__icon"/>
                    <li>Sales Report</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <PiUserList className="list__icon"/>
                    <li>User Activity</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <VscRunErrors className="list__icon"/>
                    <li>Error Logs</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className="navbar__category">
            <p className="category__name">Tools</p>
            <nav>
              <ul>
                <Link to="/dashboard" className="list__item">
                    <LuDatabaseBackup className="list__icon"/>
                    <li>Backup & Restore</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <MdOutlineImportExport className="list__icon"/>
                    <li>Import/Export</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <FiDatabase className="list__icon"/>
                    <li>Database</li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className="navbar__category">
            <p className="category__name">Help & Support</p>
            <nav>
              <ul>
                <Link to="/dashboard" className="list__item">
                    <IoDocumentTextOutline className="list__icon"/>
                    <li>Documentation</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <RiQuestionAnswerLine className="list__icon"/>
                    <li>FAQs</li>
                </Link>
                <Link to="/dashboard" className="list__item">
                    <MdOutlineSupportAgent className="list__icon"/>
                    <li>Contact Support</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>

        <div className="navbar__footer">
          <CiLogout className="footer__icon"/>
          <p>Logout</p>
        </div>
      </div>
    )
}
