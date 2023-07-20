import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {newPost} from '../../../features/posts/postsSlice'
import {Form,Input,Button,notification} from 'antd'

const CreatePost = () => {
    const { TextArea } = Input
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const onFinish = (values) => {

        dispatch(newPost(values))
        navigate('/home ')
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        }


  return (
    <div className="form__login">
      <h3>Add Post</h3>
    <section className="form__items">
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input the title!',
              },
            ]}
          >
            <Input placeholder="title" />
          </Form.Item>
          <Form.Item
            name="body"
            rules={[
              {
                required: true,
                message: 'Please input the content!',
              },
            ]}
          >
            <TextArea
                showCount
                maxLength={100}
                style={{ height: 120, marginBottom: 24 }}
                //onChange={onChange}
                placeholder="can resize"
                />

          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ background: "black" ,align:"center" }}>
              Create Post
            </Button>
            
          </Form.Item>
        </Form>
      </section>
    </div>
)}


export default CreatePost