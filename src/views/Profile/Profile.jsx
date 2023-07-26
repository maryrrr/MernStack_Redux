import { useDispatch, useSelector } from 'react-redux'
import {getInfo} from '../../features/auth/authSlice'
import {Card} from 'antd'
import { useEffect } from 'react'

const Profile = () => {
    const user=useSelector((state)=>state.auth)
    const posts=useSelector((state)=>state.posts)
    const dispatch=useDispatch()

    useEffect(() => {
      dispatch(getInfo());
    }, [dispatch]);

  return (
    <>
    <h3>Profile</h3>
    <Card className='card__profile' style={{width:"25rem"}}>
    <div key={user.user._id}>
    <p>Name:{user.user.name}</p>
    <p>Email:{user.user.email}</p>
    </div>
    </Card>
    <section>
    <div className='card__map'>
            {posts.posts?.post &&
              posts.posts.post.map((post) => (
                <div key={post._id} >
                  <Card style={{width:"25rem"}}>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                  </Card>
                </div>
              ))}
          </div>
        
    </section>

    
    </>
  )
}

export default Profile