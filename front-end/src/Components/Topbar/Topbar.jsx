import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Topbar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <>
            <div className="topBarContainer">
                <div className="topBarLeft">
                    <Link to="/" style={{textDecoration:"none"}}>
                        <span className="logo">Aley - Social</span>
                    </Link>

                </div>
                <div className="topBarCenter">
                    <div className="searchBar">
                        <Search className='searchIcon' />
                        <input placeholder='search for friends, post or videos' className="searchInput" />
                    </div>
                </div>
                <div className="topBarRight">
                    <div className="topBarLinks">
                        <span className="topBarLink">HomePage</span>
                        <span className="topBarLink">Timeline</span>
                    </div>
                    <div className="topBarIcons">
                        <div className="topBarIconItem">
                            <Person />
                            <span className="topBarIconBadge">1</span>
                        </div>
                        <div className="topBarIconItem">
                            <Chat />
                            <span className="topBarIconBadge">1</span>
                        </div>
                        <div className="topBarIconItem">
                            <Notifications />
                            <span className="topBarIconBadge">1</span>
                        </div>
                    </div>
                    <img src={`${PF}/profile1.jpeg`} alt="" className="topBarImage" />
                </div>
            </div>
        </>
    )
}

export default Topbar