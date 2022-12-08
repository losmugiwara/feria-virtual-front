import { useState } from 'react';
import { MaipoContext } from './maipoContext';

export const MaipoProvider = ({ children }) => {


  
  const [user, setUser] = useState({
    id: null,
    username: '',
    role: '',
    active: false
  });

  return (
    <MaipoContext.Provider value={{ user, setUser}}>
      {children}
    </MaipoContext.Provider>
  )
}
