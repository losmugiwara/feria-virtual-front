import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './components.css'
import { MaipoContext } from '../../context/maipoContext';
import { useContext } from 'react';

export const InfoAdmin = () => {

  const { user } = useContext(MaipoContext);

  return (
    <div className='container info m-2'>
      <h6 className='p-1'>{user.username}</h6>
      <div className='d-flex marcoImg  p-2'>
        <li className='d-flex align-items-center'>
          <FontAwesomeIcon className='icon color-icon' icon={faUser} />
        </li>
      </div>
      <ul className='p-2'>
        <li className='d-flex flex-column '>
          <label className='label-info'>Nombre</label>
          <label>Pedro Andres Perez Gonzales</label>
        </li>
        <li className='d-flex flex-column '>
          <label className='label-info'>Rut</label>
          <label>12.345.678-9</label>
        </li>
        <li className='d-flex flex-column '>
          <label className='label-info'>Fecha de Nacimiento</label>
          <label>23/12/1999</label>
        </li>
        <li className='d-flex flex-column '>
          <label className='label-info'>Correo</label>
          <label>Pe.Perez@gmail.com</label>
        </li>
      </ul>
    </div >
  )
}
