import {Link} from 'react-router-dom'


const Post = ({title,body,id}) => {
  
  
  return (
    <>
    <h1>Post</h1>
    
    <h3>
      <Link to ={`/post/${id}`}>{title}</Link>
    </h3>
      <p>{body}</p>
    {/* {posts.posts.post && posts.posts.post.map((post)=>(
      <div key={post._id} className='post'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
     
    </div>
  
     ))} */}
    </>
  )
}

export default Post