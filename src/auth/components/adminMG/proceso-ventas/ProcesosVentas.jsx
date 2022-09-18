import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './procesos.css';


export const ProcesosVentas = () => {



  return (
    <div className='container'>
      <div>

        <h1 className='title-color d-flex justify-content-center'>Proceso de ventas</h1>
        <div>
        <div className='d-flex justify-content-end flex-row'>
          <div className=' d-flex flex-row'>
            <button className='btn btnSelect'>N° Pedido <FontAwesomeIcon icon={faAngleDown}/></button>
            <input  className='form-control'  placeholder='INGRESAR DATOS'></input>
          </div>
          <button className='btn btn-width'>Buscar <FontAwesomeIcon icon={faSearch}/></button>
        </div>
        </div>
      </div>


    </div >

  )
}
