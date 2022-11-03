import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './components.css'
import { useEffect, useState } from 'react';

import { userProfile } from '../../helpers/auth';

export const InfoUsers = () => {

  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    userProfile().then((data) => {
      setUserInfo(data)
    });
  }, [])

  return (
    <div className='container info m-2'>
      <h6 className='p-1'>{userInfo.userName}</h6>
      <div className='d-flex marcoImg  p-2'>
        <li className='d-flex align-items-center'>
          <FontAwesomeIcon className='icon color-icon' icon={faUser} />
        </li>
      </div>
      <ul className='p-2'>
        <li className='d-flex flex-column '>
          <label className='label-info'>Nombre</label>
          <label>{`${userInfo.name} ${userInfo.lastName}`}</label>
        </li>
        <li className='d-flex flex-column '>
          <label className='label-info'>Rut</label>
          <label>{userInfo?.rut}</label>
        </li>
        <li className='d-flex flex-column '>
          <label className='label-info'>Fecha de Nacimiento</label>
          <label>{userInfo?.birthDate}</label>
        </li>
        <li className='d-flex flex-column '>
          <label className='label-info'>Correo</label>
          <label>{userInfo?.email}</label>
        </li>
      </ul>
    </div >
  )
}
