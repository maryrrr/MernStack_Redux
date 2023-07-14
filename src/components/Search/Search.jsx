import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getByName } from '../../features/posts/postsSlice'
import Post from '../Posts/Post/Post'

const Search = () => {
  const {postName}=useParams()
  const dispatch=useDispatch()
  const {posts}= useSelector((state)=>state.posts)
  console.log("search",postName);

  useEffect(() =>{
    dispatch(getByName(postName))
  },[dispatch,postName])
  
  return (
    <>
    <h3>Search</h3>
    {posts 
      && posts.map((post) =>(
      //   <>
      // <p>{post.title}</p>
      // <p>{post.body}</p>
      // </>
      <Post 
        key ={post._id} 
        title={post.title} 
        body={post.body}
        id={post._id}
        />
        ))}
  </>
  )
}

export default Search