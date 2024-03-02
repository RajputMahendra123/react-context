import React, { useContext, useState } from 'react'
import {UserContext} from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
      // Prevent page from refreshing    
      e.preventDefault()
      setUser({userName,password})
    }

  return (
    <>
     <h2>Login</h2>
     <input 
       type="text"  
       value={userName}
       onChange={(e) => setUserName(e.target.value)}
       placeholder='UserName'
      />
      {" "}
      <input 
       type="password"
       value={password}
       onChange={(e)=> setpassword(e.target.value)}
       placeholder='Password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login