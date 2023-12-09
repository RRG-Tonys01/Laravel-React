import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'true'
  },
  withCredentials: true,
  withXSRFToken: true
})

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('ACCESS_TOKEN')
  config.headers.Authorization = `Bearer ${token}`

  // try {
  //   const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/sanctum/csrf-cookie`);
  //   config.headers['X-XSRF-TOKEN'] = response.data.csrf_token;
  // } catch (error) {
  //   console.error("Failed to fetch CSRF token", error);
  // }

  return config;
})

axiosClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const {response} = error;
  if (response.status === 401) {
    localStorage.removeItem('ACCESS_TOKEN')
    // window.location.reload();
  } else if (response.status === 404) {
    //Show not found
  }

  throw error;
})

export default axiosClient
