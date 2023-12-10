import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'true'
  },
  withCredentials: true,
  // withXSRFToken: true
})


// Fungsi untuk mendapatkan CSRF token
const getCsrfToken = async () => {
  try {
    // Mendapatkan token CSRF
    await axios.get(`${import.meta.env.VITE_API_BASE_URL}/sanctum/csrf-cookie`);
      // .then(response => console.log(response))
      // .catch(error => console.error(error));

    // Mengambil token CSRF dari cookie
    const csrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1];

    return csrfToken;
  } catch (error) {
    console.error('Gagal mendapatkan token CSRF', error);
    throw error;
  }
};



axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('ACCESS_TOKEN')
  const csrfToken = await getCsrfToken()

  config.headers['X-XSRF-TOKEN'] = csrfToken
  config.headers.Authorization = `Bearer ${token}`
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
