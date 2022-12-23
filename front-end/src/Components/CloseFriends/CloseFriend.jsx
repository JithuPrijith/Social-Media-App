import './CloseFriend.css'

function Closefriend({user}) {
    return (
        <>
            <ul className="sideBarFriendList">
                <li className="sideBarFriend">
                    <img src="/assets/profile1.jpeg" alt="" className="sideBarFriendImage" />
                    <span className="sideBarFriendName">{user.username}</span>
                </li>
            </ul>
        </>
    )
}
export default Closefriend