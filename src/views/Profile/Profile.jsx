import { useSelector } from 'react-redux'
import {Card} from 'antd'

const Profile = () => {
    const user=useSelector((state)=>state.auth)
    //console.log(user);
  return (
    <>
    <h3>Profile</h3>
    <Card className='card__profile' style={{width:"25rem"}}>
    <div key={user.user._id}>
    <p>Name:{user.user.name}</p>
    <p>Email:{user.user.email}</p>
    </div>
    </Card>
    </>
  )
}

export default Profile