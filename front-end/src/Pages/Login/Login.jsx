import { Password } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { LoginStart } from '../../Redux/action'
import { loginCall } from '../../apiCalls'
import { Navigate } from 'react-router-dom'


function Login() {

    const email = useRef()
    const password = useRef()
    const dispatch = useDispatch()
    const { isFetching, user, error } = useSelector((prevState) => prevState)|| { isFetching: false, user: null, error: null };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginCall({ email: email.current.value, password: password.current.value }))
    }


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
                        <button className="loginButton">{isFetching ? <CircularProgress style={{ color: "white" }} /> : "Login"}</button>
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