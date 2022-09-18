import { NavLink } from 'react-router-dom'

import './ui.css';
import logo from '../../../img/logoMaipoGrande.png'
import { MaipoContext } from '../../../context/maipoContext';

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid d-flex">
                <NavLink className="navbar-brand" to='/'>
                    <img className='logo' src={logo} />
                </NavLink>
                <div className="d-flex justify-content-end font-Inter" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item p-1">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                to='productos'>
                                Productos
                            </NavLink>
                        </li>
                        <li className="nav-item p-1">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                to='transporte'>
                                Transporte
                            </NavLink>
                        </li>
                        <li className="nav-item p-1">

                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                to='crearcuenta'>

                                Cuenta
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
