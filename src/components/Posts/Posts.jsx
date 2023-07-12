import React,{useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux"
import Post from  './Post/Post'
import { getAll,reset } from '../../features/posts/postsSlice'
import {Spin} from 'antd'

const Posts = ({title,body}) => {
  const dispatch = useDispatch()
  const posts=useSelector((state)=>state.posts)
  const { isLoading } = useSelector((state) => state.posts);
  console.log("post",posts.posts.post);
  
  
useEffect(() => {
  async function getData (){
   await dispatch(getAll())
   await dispatch(reset())
  }
  getData()
}, [])
  return (
      <>
        <h1>Posts</h1>
          {isLoading ? (<Spin /> 
          ):(
          <div className='container__posts'>
            {posts.posts.post && posts.posts.post.map((post)=>(
              <Post 
              key={post._id} 
              title={post.title} 
              body={post.body}
              id={post._id} 
              />
          ))}
          </div>
          )}
    </>
  )
}

export default Posts