
import Feed from "../../Components/Feed/Feed";
import RightBar from "../../Components/RightBar/RightBar";
import SideBar from "../../Components/SideBar/SideBar";
import Topbar from "../../Components/Topbar/Topbar";
import './Home.css'

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <SideBar />
                <Feed/>
                <RightBar />
            </div>
        </>
    )
}
