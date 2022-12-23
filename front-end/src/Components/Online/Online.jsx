import './Online.css'

function Online({user}) {
    return (
        <>
            <ul className="rightBarFriendList">
                <li className="rightBarFriend">
                    <div className="rightBarProfileImageContainer">
                        <img src="/assets/profile1.jpeg" alt="" className="rightBarProfileImage" />
                        <span className="rightBarOnline"></span>
                    </div>
                    <span className="rightBarUsername">{user.username}</span>
                </li>
            </ul>
        </>
    )
}

export default Online