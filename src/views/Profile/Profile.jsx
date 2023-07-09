import { useSelector } from 'react-redux'

const Profile = () => {
    const user=useSelector((state)=>state.auth)
    //console.log(user);
  return (
    <>
    <h3>Profile</h3>
    <div key={user.user._id}>
    <p>Name:{user.user.name}</p>
    <p>Email:{user.user.email}</p>
    </div>
    </>
  )
}

export default Profile