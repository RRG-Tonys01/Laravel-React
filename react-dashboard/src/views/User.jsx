import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useOutletContext } from "react-router-dom";
import Header from "../components/Header.jsx";
import '../css/user.css';

export default function Users(){
  const { user,allEmployee } = useOutletContext()

  return (
    <div>
      <Navbar currentPage={"users"}/>
      <Header user={user}/>
      <main>
        <div className="member__header">
          <p>Member</p>
        </div>
      </main>
    </div>
  )
}
