import { faPlus, faSave, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../adminMG.css';

export const ProductorAd = ({ active, setActive }) => {

  return (
    <>
      {active === 1 &&
        <div className='container'>
          <h1 className='text-center'> Datos Productor</h1>
          <div className='container'>
            <div className='d-flex justify-content-evenly flex-row flex-wrap'>
              <div className='d-flex flex-row flex-wrap'>
                <button className='btn '>Razon social <FontAwesomeIcon icon={faPlus} /></button>
                <input className='form-control search-w' placehdivder='ingresar datos' />
              </div>
              <div>
                <button className='btn'>Buscar <FontAwesomeIcon icon={faSearch} /></button>
              </div>
              <div>
                <button className='btn btn-warning'>Modificar</button>
              </div>
              <div>
                <button className='btn btn-danger'>Eliminar</button>
              </div>
            </div>
            <div className='d-flex flex-column m-3 p-3 inp-datos'>
              <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className='m-1'>
                  <label>Razon social</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>R.U.T</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Fecha inicio de contrato</label>
                  <input type='date' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Vigencia del contrato </label>
                  <input type='date' className='form-control' />
                </div>
              </div>
              <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className='m-1'>
                  <label>Telefono</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Correo</label>
                  <input type='email' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Precio de producto</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Tipo de producto</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Direccion</label>
                  <input type='text' className='form-control' />
                </div>
              </div>
              <button className='btn m-2 '>Guardar <FontAwesomeIcon className='btn-cl' icon={faSave} /></button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
