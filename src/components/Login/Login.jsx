import React, { useState,useEffect } from 'react'
import {login,reset} from '../../features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 
import { Form, Input, Button, notification } from 'antd'; 

import './Login.styles.scss'


const Login = () => {

    const navigate = useNavigate();
    const { isError, isSuccess, message } = useSelector((state) => state.auth);
    const dispatch =useDispatch()

useEffect(()=>{
    if(isSuccess){
        notification.success({ message: "Success", description: message });
        console.log('message ok');
        setTimeout(() => {
            navigate("/profile");
            }, 2000);
    }
    if(isError){
        notification.error({ message: "Error", description: message });
        console.log('error');
    }
    dispatch(reset())
},[isError,isSuccess,message])


const onFinish = (values) => {
    dispatch(login(values))

}

return (
<div className="form__login">
      <h3>Login</h3>
    <section className="form__items">
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ background: "black" ,align:"center" }}>
              Login
            </Button>
            
          </Form.Item>
        </Form>
      </section>
    </div>
)}

export default Login