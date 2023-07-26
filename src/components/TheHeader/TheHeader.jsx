import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../features/auth/authSlice"
import { Menu,Button,Input } from 'antd';
import { HomeOutlined, UserAddOutlined, UserOutlined, ShoppingOutlined,UnlockOutlined,SolutionOutlined } from '@ant-design/icons'
import './TheHeader.styles.scss'

const TheHeader = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [text,setText]=useState()
  
  const { user } = useSelector((state) => state.auth)
  
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  }
  const handleSearch = (e) =>{

    if (e.key === "Enter"){
      navigate(`/search/${text}`)
      console.log("hola",text);
      }
  }

  return (
    <div className="container__header">
      
        <Menu  mode="horizontal" style={{background:"grey" ,color:"white"}} className='container__menu'>
            <Menu.Item key="home" icon={<HomeOutlined />} >
              <Link to='/' className='container__link'>Home</Link>
            </Menu.Item>
            
              
            {user ?(
            <>
            <Menu.Item key="logout" icon={<UnlockOutlined />}>
              <Button type="link" onClick={onLogout}>
                  Logout
              </Button>
            </Menu.Item>
            
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="newPost" icon={<SolutionOutlined />}>
              <Link to="/newPost">Create Post</Link>
            </Menu.Item>
            

            </>

          ):(
            <>
            <Menu.Item key="register" icon={<UserAddOutlined />}>
                <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="login" icon={<ShoppingOutlined />}>
                <Link to="/login">Login</Link>
            </Menu.Item>
            
            
            </>
            
  
          )}
        <Menu.Item className='margin-auto'>
          <Input 
              
              className='container__search'
              onChange={(e) => setText(e.target.value)} 
              value={text}
              onPressEnter={handleSearch}
              placeholder="search"

          />
        </Menu.Item>
    </Menu>
            
  </div> 
  
  
  )
}

export default TheHeader