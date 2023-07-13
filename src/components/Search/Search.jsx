import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getByName } from '../../features/posts/postsSlice'

const Search = () => {
  const {postName}=useParams()
  const dispatch=useDispatch()
  console.log(postName);

  useEffect(() =>{
    dispatch(getByName(postName))
  },[dispatch,postName])
  
  return (
    <div>Search</div>
  )
}

export default Search