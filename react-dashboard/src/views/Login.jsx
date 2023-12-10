import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import { useState, useEffect} from "react";
import vector from "../VectorImporter.jsx";
import '../css/login.css';

export default function Login() {
  const emailLoginRef = createRef()
  const passwordLoginRef = createRef()

  const [errors, setErrors] = useState(null)
  const {setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)


  const onSubmitLogin = ev => {
    ev.preventDefault()

    const payload = {
      email: emailLoginRef.current.value,
      password: passwordLoginRef.current.value,
    }

    // axiosClient.get(`${import.meta.env.VITE_API_BASE_URL}/sanctum/csrf-cookie`).then(async() => {
      axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token)
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
    }
    // );
  // }

  return (
    <div className={`wrapper`}>
    <div className="forms-wrapper">
      <div className="signin-signup">
        <form className="sign-in-form" onSubmit={onSubmitLogin}>
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fa-solid fa-envelope"></i>
            <input ref={emailLoginRef} type="email" id="email" placeholder="Email"/>
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input ref={passwordLoginRef} type="password" id="password" placeholder="Password" />
          </div>
          {message &&
            <div className="alert alert-danger">
              <p>{message}</p>
            </div>
          }
          <input type="submit" value="Login" className="buttton solid" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div className="panels-wrapper">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
        </div>
        <img src={vector.LoginVector} className="image" alt="Login Vector" />
      </div>
    </div>
  </div>
  )
}
