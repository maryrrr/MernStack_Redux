import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../features/auth/authSlice"
import { Menu,Button } from 'antd';
import { HomeOutlined, UserAddOutlined, UserOutlined, ShoppingOutlined,UnlockOutlined } from '@ant-design/icons'

const TheHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const onLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate("/login");

};
  return (
    <div className="header">
        <Menu  mode="horizontal" style={{background:"grey" ,color:"white"}}>
            <Menu.Item key="home" icon={<HomeOutlined />} >
              <Link to='/' className='menu-nav__link'>Home</Link>
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
    </Menu>
  </div>
  )
}

export default TheHeader