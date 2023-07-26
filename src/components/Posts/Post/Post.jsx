import {Link} from 'react-router-dom'


const Post = ({title,body,id}) => {
  
  
  return (
    <>
    
    
    <h3>
      <Link to ={`/post/${id}`}> {title}</Link>
    </h3>
      <p>{body}</p>
    </>
  )
}

export default Post