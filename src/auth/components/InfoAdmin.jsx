import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './components.css'

export const InfoAdmin = () => {
  return (
    <div className='container info '>
      <h1 className='p-1'>Admin-001</h1>
      <div className='d-flex marcoImg  p-2'>
        <li className='d-flex flex-row align-items-center'>
          <FontAwesomeIcon className='icon color-icon' icon={faImage} />
          <FontAwesomeIcon className='color-icon' icon={faPlus} />
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
