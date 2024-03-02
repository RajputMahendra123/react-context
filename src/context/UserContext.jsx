import React, { createContext, useState } from 'react';

// Create a context for User
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext,UserProvider}