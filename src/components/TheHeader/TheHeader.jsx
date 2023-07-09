import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

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
    <nav className="menu-nav">
        <ul className='menu-nav__list'>
          
          {user ?(
            <>
            <li className='menu-nav__list-item'>
            <button onClick={onLogout}  className='menu-nav__link'>Logout</button>
            </li>
            <li className='menu-nav__list-item'>
            <Link to='/' className='menu-nav__link'>Home</Link>
            </li>
            <li className='menu-nav__list-item'>
            <Link to='/profile' className='menu-nav__link'>Profile</Link>
            </li>

            </>

          ):(
            <>
            <li className='menu-nav__list-item'>
            <Link to='/register' className='menu-nav__link'>Register</Link>
            </li>
          <li className='menu-nav__list-item'>
            <Link to='/login' className='menu-nav__link'>Login</Link>
            </li>
            </>

          )}
            
        </ul>
</nav>
  )
}

export default TheHeader