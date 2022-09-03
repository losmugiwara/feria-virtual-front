
import { Link } from 'react-router-dom'

export const PrincipalPage = () => {
  return (
    <>
      <h1> Perfiles </h1>
      <div className='container d-flex'>
      <ul>
        <li>
          <Link to='admin'>Administrador</Link>
        </li>
        <li>
          <Link to='productor'>Productor</Link>
        </li>
        <li>
          <Link to='clienteext'>Cliente externo</Link>
        </li>
        <li>
          <Link to='clienteint'>Cliente interno</Link>
        </li>
        <li>
          <Link to='transportista'>Transportista</Link>
        </li>
      </ul>
      </div>
    </>
  )
}
