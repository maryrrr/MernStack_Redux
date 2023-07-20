import React,{useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { getById } from  '../../../features/posts/postsSlice'

const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts)
  //console.log(post);

  useEffect(() => {
    dispatch(getById(id));
    }, [])

  return (
    
    <div>
        <h1>PostDetail</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}

export default PostDetail