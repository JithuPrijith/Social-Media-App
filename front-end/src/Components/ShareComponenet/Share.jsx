import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {/* <img src="/assets/profile1.jpeg" alt="" className="shareProfileImage" /> */}
                    <input placeholder="what's in your mind prijith?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon'/>
                            <span className="shareOptionText">
                                Post your Media
                            </span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon'/>
                            <span className="shareOptionText">
                                Tag
                            </span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon'/>
                            <span className="shareOptionText">
                                Local
                            </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                            <span className="shareOptionText">
                                Feelings
                            </span>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Share