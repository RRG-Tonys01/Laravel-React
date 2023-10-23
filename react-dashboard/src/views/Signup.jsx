import {Link} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from "../axios-client.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {
  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmationRef = createRef()
  const {setUser, setToken} = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div className="container-fluid" style={{backgroundColor: "#59D1EF"}}>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-50 h-auto p-4 bg-white rounded">
          <p className="text-center fw-bold fs-3">Create Your New Account!</p>
          {errors &&
            <div className="alert alert-danger">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
          <form className="m-4" onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input ref={nameRef} type="text" className="form-control border-black" id="name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input ref={emailRef} type="email" className="form-control border-black" id="email"/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input ref={passwordRef} type="password" className="form-control border-black" id="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfirmation" className="form-label">Confirmation Password</label>
              <input ref={passwordConfirmationRef} type="password" className="form-control border-black" id="passwordConfirmation" />
            </div>
            <button type="submit" className="btn btn-primary w-100 my-4">Sign Up</button>

            <p className="text-center mt-4">Already Registered? <Link to="/login">Sign In Now!</Link></p>
          </form>
        </div>
      </div>
   </div>
  )
}
