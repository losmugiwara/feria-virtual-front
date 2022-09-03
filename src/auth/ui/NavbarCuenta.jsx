import { NavLink } from 'react-router-dom'
import logo from '../../img/logoMaipoGrande.png'

export const NavbarCuenta = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid d-flex">
        <NavLink className="navbar-brand" to='/'>
          <img className='logo' src={logo} />
        </NavLink>
        <div className="d-flex justify-content-end font-Inter" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row">

            <li className='nav-item p-1'>
              <NavLink to='perfil' className='nav-link text-active fw-bold'>
                admin-001
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
