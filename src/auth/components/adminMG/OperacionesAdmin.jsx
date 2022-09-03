import { Link } from "react-router-dom"

export const Operaciones = () => {
  return (
    <div>
      <h1 className=''>Menú de operaciones</h1>
      <div>
        <ul>
          <li>
            <Link to='datos'>Datos</Link>
          </li>
          <li>
            <Link to='procesoventas'>Procesos de ventas</Link>
          </li>
          <li>
            <Link to='pagos'>Pagos</Link>
          </li>
          <li>
            <Link to='informeventas'>Informe de ventas</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
