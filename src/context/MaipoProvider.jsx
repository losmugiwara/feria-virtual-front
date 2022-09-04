import React, { useState } from 'react'
import { MaipoContext } from './maipoContext'

export const MaipoProvider = ({ children }) => {

  // const user = {
  //   userName: 'asdsadas',
  //   role: 231434
  // }
  
  const [user, setUser] = useState({
    username: '',
    role: '',
    active: false
  });

  return (
    <MaipoContext.Provider value={{user, setUser}}>
      {children}
    </MaipoContext.Provider>
  )
}
