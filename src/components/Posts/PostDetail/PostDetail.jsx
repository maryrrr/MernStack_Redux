import React,{useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux'
import {update} from '../../../features/posts/postsSlice'
import { getById } from  '../../../features/posts/postsSlice'
import { Button, Modal, Form, Input} from "antd"



const PostDetail = ({visible,setVisible}) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { TextArea } = Input
  const [form]=Form.useForm()
  const {post}=useSelector((state)=>state.posts)
  
  

  useEffect(() => {
    const PostToEdit = {
      ...post
    }
    dispatch(getById(id))
    form.setFieldsValue(PostToEdit);
    
    }, [post]);
  
const onFinish = (values) => {
  const postWithId = {body:{...values}, id: post._id }
  dispatch(update(postWithId))
  setVisible(false)
}

  return (
    <>
    
    
    <Modal
      title="Edit Post"
      open={visible}
      footer={[]}
      >

      <Form onFinish={onFinish} form={form} >
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
              placeholder="can resize"
              />

        </Form.Item>
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  </>
  )
}
export default PostDetail

