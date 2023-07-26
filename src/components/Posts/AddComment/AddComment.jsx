import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react';
import { reviews } from '../../../features/posts/postsSlice';
import {Form,Input,Button,Modal} from 'antd'

const AddComment = ({visible,setVisible}) => {
    const dispatch=useDispatch()
    const {post} = useSelector((state) => state.posts.posts)
    const [comment, setComment] = useState('');

  const onFinish = (values,id) => {
    const addComment ={...values,id}
    dispatch(reviews(addComment({ postId: post._id, commentBody: comment })));
    setVisible(false);
  }

  const handleCancel = () => {
    setVisible(false);
  }
return(
<Modal visible={visible} onCancel={handleCancel} footer={null}>
  <Form onFinish={onFinish}>
    <Form.Item
      label="Comment"
      name="comment"
      rules={[{ required: true, message: 'Please enter your comment!' }]}
    >
      <Input.TextArea rows={4} onChange={(e) => setComment(e.target.value)} />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Add Comment
    </Button>
      </Form.Item>
      </Form>
</Modal>
  )
}


export default AddComment
