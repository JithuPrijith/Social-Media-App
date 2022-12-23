import './Profile.css'
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/profile1.jpeg" alt="" className="profileCoverImage" />
                            <img src="/assets/profile1.jpeg" alt="" className="profileUserImage" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Prijith</h4>
                            <span className="profileInfoDesc">Hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed user ={"prijith"}/>
                        <RightBar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile