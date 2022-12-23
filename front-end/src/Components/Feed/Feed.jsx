import { useEffect, useState } from 'react'
import Post from '../Post/Post'
import Share from '../ShareComponenet/Share'
import './Feed.css'
import axios from 'axios'
function Feed({user}) {

    const [posts, setPosts] = useState([])
    const fetchPost = async() => {
        console.log(user);
        const res  = !user ? await axios.get('/post/timeline/63a196a1593c2c4e1af64dfc')
                :  await  axios.get('/post/profile/63a196a1593c2c4e1af64dfc')
        
        setPosts(res.data)
    }
    useEffect(() => {
       fetchPost()
    },[])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {
                    posts.map(data => (
                        <Post key={data._id} posts = {data}/>
                    ))
                }

            </div>
        </div>
    )
}

export default Feed