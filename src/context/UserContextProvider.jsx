import React, { useState } from 'react'
import UserContext from './UserContext'

// children is props which is used to pass values
const UseContextProvider = ({children})=>{
   const [user, setUser] =  useState(null)

   return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider> 
   )

}

export default UseContextProvider