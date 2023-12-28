// React Library
import { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";

// Other Components
import Navbar from "../components/Navbar";
import Header from "../components/Header";

// Import CSS File
import "../css/dashboard.css"

export default function Dashboard(){
  const { user } = useOutletContext()

  // const onLogout = ev => {
  //   ev.preventDefault()

  //   axiosClient.post('/logout')
  //     .then(() => {
  //       setUser({})
  //       setToken(null)
  //     })
  // }

  return (
    <div>
      <Navbar currentPage={"dashboard"}/>
      <Header user={user}/>
      <main>
        <div>
          <p>User Name : {user.employee_name}</p>
          <p>Email : {user.email}</p>
        </div>
      </main>
    </div>
  )
}
