import Online from '../Online/Online'
import './RightBar.css'
import { Users } from '../../dummyData'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Add, Remove } from '@mui/icons-material'

function RightBar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [friends, setFriends] = useState([])
    const { user: currentUser } = useSelector(prevState => prevState)
    const [followed, setFollowed] = useState(false)

    useEffect(() => {
        currentUser.followings.includes(user?.id)
    }, [])
    // currentUser, user.id

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put('/user' + user._id + '/follow', { userId: currentUser._id })
            }
            else {
                await axios.put('/user' + user.id + '/unfollow', { userId: currentUser._id })
            }
        } catch (error) {
            console.log(error);
        }
        setFollowed(!followed)
    }

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get('/user/getfriends' + user._id)
                console.log(friendList);
                setFriends(friendList.data)
            } catch (error) {
                console.log(error);
            }
        }
        getFriends()
    }, [])

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
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className='rightBarFollowingButton' onClick={handleClick}>
                        {followed ? "unfollow" : "follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
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
                        <span className="rightBarInfovalue">{user.relationship === 1 ? "single" : user.relationship === 2 ? "married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightBarFollowings">
                    {
                        friends.map((friends) => (
                            <div className="rightBarFollowing">
                                <Link to={'/profile/' + friends.username} style={{ textDecoration: 'none' }}>
                                    <img src={friends.profilePicture ? PF + friends.profilePicture : PF + "/assets/profile1.jpeg"} alt="" className="rightBarFollowingImage" />
                                    <span className="rightBarFollowingName">{friends.username}</span>
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </>
        )
    }
    return (
        <div className='rightBar'>
            <div className="rightWrapper">
                {
                    user ? <ProfileRightBar /> : <HomeRightBar />
                }
            </div>
        </div>
    )
}

export default RightBar