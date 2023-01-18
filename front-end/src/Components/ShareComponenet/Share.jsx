import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import axios from 'axios';

function Share() {
    const { user } = useSelector(prevState => prevState);
    const desc = useRef();
    const [file, setFile] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName)
            data.append("file", file)
            newPost.img = fileName;
            console.log(data);
            try {
                var res = await axios.post('/upload', data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            await axios.post('/post', newPost)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    {/* <img src="/assets/profile1.jpeg" alt="" className="shareProfileImage" /> */}
                    <input placeholder="what's in your mind prijith?" ref={desc} className="shareInput" />
                </div>
                <hr className="shareHr" />
                {file && (
                    <div className="shareImageContainer">
                        <img src={URL.createObjectURL(file)} alt="" className="shareImage" />
                        <Cancel className='shareCancelImage' onClick={() => setFile(null)} />
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor='file' className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptionText">
                                Post your Media
                            </span>
                            <input style={{ display: "none" }} type="file" id='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className="shareOptionText">
                                Tag
                            </span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareIcon' />
                            <span className="shareOptionText">
                                Local
                            </span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
                            <span className="shareOptionText">
                                Feelings
                            </span>
                        </div>
                        <button className="shareButton" type='submit'>Share</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Share