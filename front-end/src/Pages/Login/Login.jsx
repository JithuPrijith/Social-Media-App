import { Password } from '@mui/icons-material'
import { useContext,  useRef } from 'react'
import './Login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../Context/AuthContext'
import { CircularProgress } from '@mui/material'


function Login() {

    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    }
    console.log(user);


    // other code

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Aley Social</h3>
                    <span className="loginDesc">Lorem ipsumui soluta quas esse. Debitis consectetur officia sit, voluptate eligendi quam.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" className="loginInput" required ref={email} />
                        <input placeholder="Password" type="password" className="loginInput" required ref={password} />
                        <button className="loginButton">{isFetching ? <CircularProgress style={{color:"white",size:"25px"}} /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login