import { faAngleDown, faArrowAltCircleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import '../procesos.css';


export const Ventas = () => {
  const nav = useNavigate();


  return (
    <div className='container'>
      <div>

        <h1 className='title-color d-flex justify-content-center'>Proceso de ventas</h1>
        <div className='d-flex justify-content-between'>
          <div className='d-flex justify-content-start'>
            <button className='btn' onClick={()=>{nav(-1)}}> <FontAwesomeIcon icon={faArrowAltCircleLeft} /></button>
          </div>
          <div className='d-flex justify-content-end'>
            <div className=' d-flex flex-row'>
              <button className='btn btnSelect'>N° Pedido <FontAwesomeIcon icon={faAngleDown} /></button>
              <input className='form-control' placeholder='INGRESAR DATOS'></input>
            </div>
            <button className='btn btn-width'>Buscar <FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </div>
      </div>


    </div >

  )
}
