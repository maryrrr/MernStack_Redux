
Social network MERN

A social network is being developed in which users will register, log in.

Requirements:

User Registration.

● User login.

● That you can see the publications and create new ones.

● That the publications made by the logged in user can be edited and deleted

● Give/remove Like a post.

● Search engine for user profiles or posts

● That in your profile you can see your data and your posts

● That you can comment on the publications



Minimum components:

Register

Login

home

Posts(publications)

post

AddPost

PostDetail

AddComment

Profile. Profile view with the data of the logged in user and their posts

headers

Footers

Implement React Router

/home. Home of the app

/login

/register

/profile.

Use Redux

Using SASS





<img src="MernStack.pn"/>



## Usage/Examples

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {newPost} from '../../../features/posts/postsSlice'
import {Form,Input,Button} from 'antd'

const CreatePost = () => {
    const { TextArea } = Input
    const [form] = Form.useForm()
    
    const dispatch=useDispatch()
    
    
    const onFinish = (values) => {

        dispatch(newPost(values))
        form.resetFields();
        //navigate('/home ')
    }

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        }
....
## Documentation

[Documentation](https://linktodocumentation)

[Mongodb](https://www.mongodb.com/atlas/database)

[Mongoose](https://mongoosejs.com/docs/queries.html)

[Railway](https://railway.app/)

[stackoverflow](https://stackoverflow.com/)

[Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools)

[Antd](https://ant.design/)
## Installation

Install my-project with npm

npx create-react-app redux-project --template redux

$ npm i react-router-dom@6

npm i axios

npm i antd
    
