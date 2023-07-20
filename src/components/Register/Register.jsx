import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {register,reset} from '../../features/auth/authSlice'
import {notification} from  "antd"
import './Register.styles.scss'


const Register = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''

})

const {name,email,password,password2} = formData
const dispatch=useDispatch()

const navigate=useNavigate()

const {isSuccess,message,isError}=useSelector((state)=>state.auth)
useEffect(() =>{
    if(isSuccess){
       notification.success({
            message:"Success",
            description:message,
        }) 
        navigate('/login ')
    }
    if(isError){
         notification.error({message:"Error",description:message})
        console.log();
    }
    dispatch(reset())
},[isSuccess,isError,message])


const onChange = (e)=>{

    setFormData((prevState)=> ({
    ...prevState,
    [e.target.name]:e.target.value,

}))

}

const onSubmit = (e) => {

    e.preventDefault()
    if (password !== password2) {
        return notification.error({
        message: "Error",
        description: "The passwords that you entered do not match!",
    })
    } else {
        return dispatch(register(formData));
        }
    };


return (
        
    <div className='container__register'>
    <h3 className='container__align'>Register</h3>

    
      <form onSubmit={onSubmit} className="container__form" >
        
        <input type="text" name="name" value={name} onChange={onChange} placeholder="name" className='container__items' />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="email" className='container__items' />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="password" className='container__items' />
        <input type="password" name="password2" value={password2} onChange={onChange} placeholder="password2"className='container__items' />
        <button type="submit" className='container__button'>Register</button>
        
      </form>
    
  </div>
);
};

export default Register