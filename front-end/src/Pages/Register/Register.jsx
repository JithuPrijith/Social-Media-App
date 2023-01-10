import axios from 'axios'
import { useRef } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("password not match")
    }
    else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        await axios.post('/auth/register', user)
        navigate('/login')
      } catch (error) {
        console.log(error);
      }
    }
  }

  const navigateLogin = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Aley Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Aley Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required type={email} ref={email} className="loginInput" />
            <input placeholder="Password" required type={password} ref={password} className="loginInput" />
            <input placeholder="Password Again" required type={password} ref={passwordAgain} className="loginInput" />
            <button className="loginButton" type='submit'>Sign Up</button>
            <button onClick={navigateLogin} className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register