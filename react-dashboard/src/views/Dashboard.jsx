// React Library
import { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
} from 'chart.js'

// Other Components
import Navbar from "../components/Navbar";
import Header from "../components/Header";

// Import CSS File
import "../css/dashboard.css"

// React Icons
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaRegFaceSmile } from "react-icons/fa6";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
)

export default function Dashboard(){
  const { user } = useOutletContext()
  const [timeOfDay, setTimeOfDay] = useState('');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  const performanceData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
    datasets: [
      {
        label: 'Last Week',
        data: [5, 15, 10, 20, 25],
        borderColor: 'rgba(0, 32, 63, 0.5)',
        pointBorderColor: 'rgba(173, 239, 209, 1.00)',
        fill: true,
        backgroundColor: 'rgba(0, 32, 63, 0.5)',
        borderWidth: 4
      },
      {
        label: 'This Week',
        data: [10, 20, 15, 25, 30],
        borderColor: 'rgba(16, 24, 32, 1.00)',
        pointBorderColor: 'rgba(254, 231, 21, 1.00)',
        fill: false,
        backgroundColor: 'rgba(16, 24, 32, 0.5)',
        borderWidth: 4
      },
    ],
  };

  const performanceDataOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Set to false to allow the chart to adjust its aspect ratio
  }

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
      <Header user={user}/>
    </div>
  )
}
