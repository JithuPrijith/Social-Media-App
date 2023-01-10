import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Home from "./Pages/HomeComponent/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";

function RouteFolder() {
    const { user } = useSelector((prevState) => prevState) || { user: null }
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={user ? <Home /> : <Register />} />
                <Route path="/login" element={user ? <Navigate replace to={'/'} /> : <Login />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/register" element={user ? <Navigate replace to={'/'} /> : <Register />} />
            </Routes>
        </Router>
    )
}

export default RouteFolder