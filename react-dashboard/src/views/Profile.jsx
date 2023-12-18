import React from 'react'
import Navbar from '../components/Navbar'
import { useOutletContext } from 'react-router-dom'
import "../css/profile.css"
import image from "../ImageImporter"

export default function Profile() {
  const { user } = useOutletContext()

  return (
    <div>
      <Navbar currentPage={"users"}/>
      <main>
        <div className='employee__profile'>
          <div className='employee__header'>
            <div className='employee__picture'>
              <img src={image.ManagerProfile} alt="User Profile Picture" />
            </div>
            <h3>{user.employee_name}</h3>
          </div>
        </div>
      </main>
    </div>
  )
}
