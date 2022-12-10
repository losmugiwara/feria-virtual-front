import { useState } from 'react';
import { MaipoContext } from './maipoContext';

export const MaipoProvider = ({ children }) => {

  const [user, setUser] = useState({
    id: null,
    username: '',
    role: '',
    active: false
  });

  const [productsCtx, setProductsCtx] = useState();

  return (
    <MaipoContext.Provider value={{ user, setUser, productsCtx, setProductsCtx}}>
      {children}
    </MaipoContext.Provider>
  )
}
