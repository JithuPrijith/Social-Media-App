import './Post.css';
import { MoreVert, Favorite, ThumbUp } from '@mui/icons-material'
import { Users } from '../../dummyData';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Post({ posts }) {
    console.log(posts);
    const [like, setLike] = useState(posts.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const { user: currentUser } = useSelector(prevState => prevState)
    
    const likeHandler = async () => {
        try {
            await axios.put('/post/' + posts._id + '/like', { userId: currentUser._id })
            
            setLike(isLiked ? like - 1 : like + 1)
            setIsLiked(!isLiked)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setIsLiked(posts.likes.includes(currentUser._id))
    },[currentUser._id,posts.likes])

    const fetchUser = async () => {
        const res = await axios.get(`/user/?userId=${posts.userId}`)
        setUser(res.data)
    }

    useEffect(() => {
        fetchUser()
    },[posts.userId])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.username}`}>
                            <img src="/assets/profile1.jpeg" alt="" className="postProfileImage" />
                        </Link>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(posts.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{posts.desc}</span>
                    <img src="/assets/profile1.jpeg" alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp onClick={likeHandler} className='likeIcon likeIconColor' />
                        <Favorite className='likeIcon' />
                        <span className="postLikeCounter">{like} People liked this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post