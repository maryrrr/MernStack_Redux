import React, { useState,useEffect } from 'react'
import {login,reset} from '../../features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {notification} from 'antd'
import './Login.styles.scss'


const Login = () => {

    const [formData, setFormData] = useState({
        email:'',
        password:''

})

const {email,password} = formData

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


const onChange = (e)=>{

    setFormData((prevState)=> ({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}

const onSubmit = (e) => {

    e.preventDefault()
    console.log('formData',formData)
dispatch(login(formData))

}

return (

    <div className="form__login">
        <h3>Login</h3>
        
    <section className='form__items'>
    <form onSubmit={onSubmit}>

        <input type="email" name="email" value={email} onChange={onChange} placeholder='name'/>
        <input type="password" name="password" value={password} onChange={onChange} placeholder='password'/>
        <button type="submit">Login</button>

    </form>
    </section>

    </div>

)

}

export default Login