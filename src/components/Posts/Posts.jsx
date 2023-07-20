import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from "react-redux"
import Post from  './Post/Post'
import { getAll,reset } from '../../features/posts/postsSlice'
import {Spin,Card,Pagination} from 'antd'
import './Posts.styles.scss'

const Posts = ({title,body}) => {
  const[currentPage,setCurrentPage]=useState()
  
  const dispatch = useDispatch()
  const posts=useSelector((state)=>state.posts)
  console.log(posts);
  const { isLoading } = useSelector((state) => state.posts);

  
  
  
useEffect(() => {
    async function getData (){
    await dispatch(getAll())
    await dispatch(reset())
    
    }
    getData()
  }, [])
  return (
    <>
     
    <section className='container__posts'>
      <h1 className='container__title'>Posts</h1>
      {isLoading ? (
        <Spin />
      ) : (
        <div className="container__items">
        {posts.posts.post && posts.posts.post.map((post) => (
          <div key={post._id} className='container__element' >
            <Card >
              <h3 className='container__title'>{post.title}</h3>
              <p >{post.body}</p>
            </Card>
          </div>
        ))}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          defaultCurrent={1}
          total={24}
          onChange={(page, limit) => {
            setCurrentPage((page - 1) * limit);
          }}
        />
      </div>
    </section>
  </>
);
        }
export default Posts