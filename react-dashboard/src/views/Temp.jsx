import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import { useState } from "react";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }

  return (
   <div className="container-fluid" style={{backgroundColor: "#59D1EF"}}>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 h-auto p-4 bg-white rounded">
        <p className="text-center fw-bold fs-3">Sign in Into Your Account</p>
        {message &&
            <div className="alert alert-danger">
              <p>{message}</p>
            </div>
          }
        <form className="m-4" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input ref={emailRef} type="email" className="form-control border-black" id="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control border-black" id="password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 my-4">Submit</button>

          <p className="text-center mt-4">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
   </div>
  )
}
