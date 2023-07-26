import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getByName } from '../../features/posts/postsSlice'
import Post from '../Posts/Post/Post'
import './Search.styles.scss'

const Search = () => {
  const {postName}=useParams()
  const dispatch=useDispatch()
  
  const {posts}= useSelector((state)=>state.posts)
  console.log("search",posts);
  
  useEffect(() =>{
    dispatch(getByName(postName))
  },[dispatch,postName])
  
  

  return (
    
    <div className='container__search'>
    <h3 className='container__title'>Search Posts</h3>
    
    {posts.length > 0 &&
        posts.map((post) => (
          <div className='container__items'>
            <Post key={post._id} title={post.title} body={post.body} id={post._id} />
          </div>
        ))}
      </div>
  
  )
}

export default Search