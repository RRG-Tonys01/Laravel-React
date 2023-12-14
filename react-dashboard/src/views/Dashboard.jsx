import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/dashboard.css"

export default function Dashboard(){
  const { user } = useOutletContext()
  const [timeOfDay, setTimeOfDay] = useState('');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  // const location = useLocation();
  // const pathname = location.pathname;


  // const parts = pathname.split('/');
  // const desiredPart = parts[parts.length - 1];

  useEffect(() => {
    if (currentHour >= 4 && currentHour < 12) {
      setTimeOfDay('Morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setTimeOfDay('Afternoon');
    } else if (currentHour >= 17 && currentHour < 21) {
      setTimeOfDay('Evening');
    } else {
      setTimeOfDay('Night');
    }
  }, [])


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
      <main>
        <header>
          <p>Good <span className="time__ofDay">{timeOfDay}</span>, <span className="user__name">{user.employee_name}</span></p>
        </header>
      </main>
    </div>
  )
}
