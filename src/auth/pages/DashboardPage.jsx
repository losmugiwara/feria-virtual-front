import React, { useContext } from 'react';
import { MaipoContext } from '../../context/maipoContext';



export const DashboardPage = () => {

    const {user} = useContext(MaipoContext);

  return (
    <> 
        <h3>Bienvenid@ {user.username}</h3>
        <hr/>

        

    </>
  )
}
