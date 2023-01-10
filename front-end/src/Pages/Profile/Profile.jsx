import './Profile.css'
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Profile() {
    const [user, setUser] = useState({})
    const username = useParams().username
    useEffect(() => {
        console.log("here")
        const fetchUser = async () => {
            const res = await axios.get(`/user/?username=${username}`)
            setUser(res.data)
        }
        fetchUser()
    }, [])
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || "/assets/profile1.jpeg"} alt="" className="profileCoverImage" />
                            <img src={user.profilePicture || "/assets/profile1.jpeg"} alt="" className="profileUserImage" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Prijith</h4>
                            <span className="profileInfoDesc">Hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <RightBar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile