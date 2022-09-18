import React, { useContext } from 'react'
import { MaipoContext } from '../../context/maipoContext'

export const ProfilePage = () => {
  
    const {user} = useContext(MaipoContext);
  
    return (
    <>
        <h3>Perfil {user.username}</h3>
        <hr/>
    </>
  )
}
