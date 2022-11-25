import { Link } from "react-router-dom"
import  './adminMG.css'

export const OperacionesAdmin = () => {
  return (
    <div className='container inp-datos m-6'>
      <h5 className='text-center'> Menú de operaciones </h5>
      <div>
        <ul className='nav d-flex flex-column flex-wrap align-items-center p-3'>
          <li className='nav-item m-1 '>
            <Link className='btn btn-w' to='datos'>Datos</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='procesoventas'>Procesos de ventas</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='pay'>Pagos</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='informeventas'>Informe de ventas</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='addProducts'>Agregar productos</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
