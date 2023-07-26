import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from "react-redux"
import Post from  './Post/Post'
import { deletePost, getAll,getById,reviews,reset } from '../../features/posts/postsSlice'
import PostDetail from './PostDetail/PostDetail'
import {Spin,Pagination,Card} from 'antd'
import { DeleteOutlined,EditOutlined,CommentOutlined } from "@ant-design/icons"
import AddComment from './AddComment/AddComment'
import './Posts.styles.scss'


const Posts = ({title,body}) => {
  const[page,setPage]=useState(1)
  const byPage=6
  

  
  const dispatch = useDispatch()
  const posts=useSelector((state)=>state.posts)
  const { isLoading } = useSelector((state) => state.posts)
  const [isModalVisible, setIsModalVisible] = useState(false)  
  const [isAddCommentModalVisible, setIsAddCommentModalVisible] = useState(false);

  

  const showModal = (id) => {
    dispatch(getById(id))
    setIsModalVisible(true)
    
    }

    const showModalComment = (id) => {
      dispatch(getById(id))
      setIsAddCommentModalVisible(true)
    }

  useEffect(() => {
    async function getData (){
    await dispatch(getAll())
    await dispatch(reset())
    
    }
    getData()
  }, [dispatch])
  

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * byPage;
  const endIndex = startIndex + byPage;
  return (
    <>
     
     <section className="container__posts">
        <h1 className="container__title">Posts</h1>
        {isLoading ? (
          <Spin />
        ) : (
          <div className="container__map">
            {posts.posts?.post &&
              posts.posts.post.slice(startIndex, endIndex).map((post) => (
                <div key={post._id} className="container__element">
                  <Card>
                    <h3 className="container__title">{post.title}</h3>
                    <p>{post.body}</p>
                  </Card>
                  {post.reviews?.map((review) => (
                    <Card key={review._id}>
                      <p>{review.comment}</p>
                    </Card>
                  ))}
                  <div className="container__icon">
                    <DeleteOutlined onClick={() => dispatch(deletePost(post._id))} />
                    <EditOutlined onClick={() => showModal(post._id)} />
                    <CommentOutlined onClick={() => showModalComment(post)} />
                  </div>
                  <AddComment
                    visible={isAddCommentModalVisible}
                    setVisible={setIsAddCommentModalVisible}
                   
                  />
                </div>
              ))}
          </div>
        )}

        <PostDetail visible={isModalVisible} setVisible={setIsModalVisible} />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            current={page}
            total={posts.posts?.post?.length || 0}
            onChange={handlePageChange}
            pageSize={byPage}
          />
        </div>
      </section>
    </>
  )
}
export default Posts