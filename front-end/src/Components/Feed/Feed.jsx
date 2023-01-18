import { useEffect, useState } from 'react'
import Post from '../Post/Post'
import Share from '../ShareComponenet/Share'
import './Feed.css'
import axios from 'axios'
import { useSelector } from 'react-redux'
function Feed({ username }) {
    const { user } = useSelector(prevState => prevState)
    const [posts, setPosts] = useState([])

    const fetchPost = async () => {
        const res = username ? await axios.get('/post/profile/' + username)
            : await axios.get('/post/timeline/' + user._id)
        setPosts(res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
        }))
        console.log(posts);
    }

    useEffect(() => {
        fetchPost()
    }, [username, user._id])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                {user.username === username && <Share />}
                {
                    posts.map(data => (
                        <Post key={data._id} posts={data} />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed