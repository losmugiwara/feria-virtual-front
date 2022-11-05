import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './procesos.css';
import { ListSales } from './ventas/indexVentas';


export const Sales = () => {
  const nav = useNavigate();


  return (
    <>
      <div className='container'>
        <div>
          <div className='d-flex justify-content-center'>
            <div className='d-flex justify-content-start p-2'>

            </div>
            <h1
              className='title-color d-flex justify-content-center'>
              Proceso de ventas
            </h1>
          </div>
          <div className='d-flex justify-content-evenly mt-2'>
            <button
              className='btn'
              onClick={() => { nav(-1) }}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
            <Button
              component={Link}
              className='btn'
              variant='contained'
              to='crear-venta'>
              Crear venta
            </Button>
          </div>
        </div>
        <ListSales />
      </div>
    </>
  )
}
