import { useEffect } from "react";
import Navbar from "../components/Navbar";
import axiosClient from "../axios-client.js";
import { useOutletContext } from "react-router-dom";
import Header from "../components/Header.jsx";

export default function Users(){
  const { user } = useOutletContext()


  return (
    <div>
      <Navbar currentPage={"users"}/>
      <Header user={user}/>
    </div>
  )
}
