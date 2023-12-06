import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import { useState, useEffect} from "react";
import vector from "../VectorImporter.jsx";
import '../css/login.css';

export default function Login() {
  // Login Reference Variable
  const emailLoginRef = createRef()
  const passwordLoginRef = createRef()

  // SignUp Reference Variable
  const nameSignUpRef = createRef()
  const emailSignUpRef = createRef()
  const passwordSignUpRef = createRef()
  const passwordConfirmationSignUpRef = createRef()

  const [errors, setErrors] = useState(null)
  const {setUser, setToken } = useStateContext()
  const [message, setMessage] = useState(null)

  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (currentUrl === '/signup') {
      setIsSignUp(true);
    }
  }, []);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignIn = () => {
    setIsSignUp(false);
  };

  const onSubmitLogin = ev => {
    ev.preventDefault()

    const payload = {
      email: emailLoginRef.current.value,
      password: passwordLoginRef.current.value,
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

  const onSubmitRegister = ev => {
    ev.preventDefault()

    const payload = {
      name: nameSignUpRef.current.value,
      email: emailSignUpRef.current.value,
      password: passwordSignUpRef.current.value,
      password_confirmation: passwordConfirmationSignUpRef.current.value,
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
    <div className={`wrapper ${isSignUp ? 'sign-up-mode' : ''}`}>
    <div className="forms-wrapper">
      <div className="signin-signup">
        {/* Login Form Start*/}
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
         {/* Login Form End*/}

        {/* SignUp Form Start */}
        <form className="sign-up-form" onSubmit={onSubmitRegister}>
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input ref={nameSignUpRef} type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input ref={emailSignUpRef} type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input ref={passwordSignUpRef} type="password" placeholder="Password" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input ref={passwordConfirmationSignUpRef} type="password" placeholder="Confirmation Password" />
          </div>
          {errors &&
            <div className="alert alert-danger">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
          <input type="submit" className="buttton" value="Sign up" />
          <p className="social-text">Or Sign up with social platforms</p>
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
        {/* SignUp Form End */}
      </div>
    </div>

    <div className="panels-wrapper">
      {/* Login Panel */}
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <Link to="/signup">
            <button className="buttton transparent" id="sign-up-buttton" onClick={handleSignUp}>
              Sign up
            </button>
          </Link>
        </div>
        <img src={vector.LoginVector} className="image" alt="Login Vector" />
      </div>

      {/* SingUp Panel */}
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <Link to="/login">
            <button className="buttton transparent" id="sign-in-buttton" onClick={handleSignIn}>
              Sign in
            </button>
          </Link>
        </div>
        <img src={vector.RegisterVector} className="image" alt="Register Vector" />
      </div>
    </div>
  </div>
  )
}
