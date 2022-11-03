import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../adminMG.css';

export const AddUser = ({ active, setActive }) => {

  return (
    <>
      {active === 1 &&
        <div className='container'>
          <h3 className='text-center'> Datos Productor</h3>
          <div className='container p-1'>

            <div className='d-flex flex-column m-3 p-3 inp-datos'>
              <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className='m-1'>
                  <label>Nombre de Usuario</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Nombres</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Apellidos</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Correo</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Contraseña</label>
                  <input type='text' className='form-control' />
                </div>
              </div>
              <div className='d-flex flex-row flex-wrap justify-content-center'>
                <div className='m-1'>
                  <label>Role de Usuario</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Rut</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Razón social</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>País</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Ciudad</label>
                  <input type='text' className='form-control' />
                </div><div className='m-1'>
                  <label>Comuna</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Dirección</label>
                  <input type='text' className='form-control' />
                </div>
                <div className='m-1'>
                  <label>Fecha de nacimiento</label>
                  <input type='date' className='form-control' />
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
