import Online from '../Online/Online'
import './RightBar.css'
import { Users } from '../../dummyData'

function RightBar({ user }) {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/profile1.jpeg" alt="" className="birthdayImage" />
                    <span className="birthdayText"><b>prijith peter</b> and 3 other friends<b></b> birthday</span>
                </div>
                <img src="/assets/profile1.jpeg" alt="" className="rightBarAdd" />
                <h4 className="rightBarTitle">Online Friends</h4>
                {
                    Users.map((data) => (
                        <Online key={data.id} user={data} />
                    ))
                }
            </>
        )
    }

    const ProfileRightBar = () => {
        return(
            <>
            <h4 className="rightBarTitle">User Information</h4>
            <div className="rightBarInfo">
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">City:</span>
                    <span className="rightBarInfovalue">{user.city}</span>
                </div>
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">From:</span>
                    <span className="rightBarInfovalue">{user.from}</span>
                </div>
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">Relationship:</span>
                    <span className="rightBarInfovalue">{user.relationship === 1 ? "single" :user.relationship === 2 ? "married" :"-"}</span>
                </div>
            </div>
            <h4 className="rightBarTitle">User Friends</h4>
            <div className="rightBarFollowings">
                <div className="rightBarFollowing">
                    <img src="/assets/profile1.jpeg" alt="" className="rightBarFollowingImage" />
                    <span className="rightBarFollowingName">Prijith Peter</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="/assets/profile1.jpeg" alt="" className="rightBarFollowingImage" />
                    <span className="rightBarFollowingName">Prijith Peter</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="/assets/profile1.jpeg" alt="" className="rightBarFollowingImage" />
                    <span className="rightBarFollowingName">Prijith Peter</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="/assets/profile1.jpeg" alt="" className="rightBarFollowingImage" />
                    <span className="rightBarFollowingName">Prijith Peter</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="/assets/profile1.jpeg" alt="" className="rightBarFollowingImage" />
                    <span className="rightBarFollowingName">Prijith Peter</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className='rightBar'>
            <div className="rightWrapper">
             {
                user ? <ProfileRightBar/> : <HomeRightBar/>
             }
            </div>
        </div>
    )
}

export default RightBar