import { Link } from "react-router-dom"
import  './adminMG.css'

export const Operaciones = () => {
  return (
    <div className='container inp-datos m-6'>
      <h4 className='text-center'> Menú de operaciones </h4>
      <div>
        <ul className='nav d-flex flex-column flex-wrap align-items-center'>
          <li className='nav-item m-1 '>
            <Link className='btn btn-w' to='datos'>Datos</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='procesoventas'>Procesos de ventas</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='pagos'>Pagos</Link>
          </li>
          <li className='nav-item m-1'>
            <Link className='btn btn-w' to='informeventas'>Informe de ventas</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
