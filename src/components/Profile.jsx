import React, { useContext } from 'react'
import {UserContext} from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)
  
  
  if (!user) return <h1>No logged in</h1>


  return (
   <>
     <div>Name : {user.userName}</div>
     <div>Name : {user.password}</div>
   </>
  )
}

export default Profile