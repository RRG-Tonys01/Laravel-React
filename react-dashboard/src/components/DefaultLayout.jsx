import {Navigate, Outlet } from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import {useState, useEffect} from "react";
import Loading from "./Loading.jsx";

export default function DefaultLayout() {
  const {user, token, setUser, setToken} = useStateContext();
  const [loading, setLoading] = useState(true);

  if (!token) {
    return <Navigate to="/login"/>
  }

  useEffect(() => {
    setLoading(true);

    axiosClient.get('/user').then(({data}) => {
      setUser(data)
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  return (
    <div id="defaultLayout">
      {loading ? (
        <Loading />
      ) : (
        <Outlet context={{user}}/>
      )}
    </div>
  )
}
