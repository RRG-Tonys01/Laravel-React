import {Navigate, Outlet } from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios-client.js";
import {useState, useEffect} from "react";
import Loading from "./Loading.jsx";

export default function DefaultLayout() {
  const {user, token, setUser, setToken} = useStateContext();
  const [allEmployee, setAllEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!token) {
    return <Navigate to="/login"/>
  }

  const fetchData = async () => {
    try {
      const user_request = await axiosClient.get('/user');
      var {data} = user_request;
      setUser(data);

      const employee_res = await axiosClient.get('/employee');
      var {data} = employee_res;
      setAllEmployee(data);


    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData()
  }, [])

  return (
    <div id="defaultLayout">
      {loading ? (
        <Loading />
      ) : (
        <Outlet context={{user, allEmployee}}/>
      )}
    </div>
  )
}
