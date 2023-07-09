import React, { useState } from 'react'
import {login} from '../../features/auth/authSlice'
import { useDispatch } from 'react-redux'


const Login = () => {

    const [formData, setFormData] = useState({

        email:'',

        password:''

})

const {email,password} = formData

const dispatch =useDispatch()

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

    <form onSubmit={onSubmit}>

        <input type="email" name="email" value={email} onChange={onChange} placeholder='name'/>

        <input type="password" name="password" value={password} onChange={onChange} placeholder='password'/>

        <button type="submit">Login</button>

    </form>

)

}

export default Login