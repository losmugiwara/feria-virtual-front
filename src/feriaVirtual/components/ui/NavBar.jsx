import { NavLink, useNavigate } from 'react-router-dom'

import './ui.css';
import logo from '../../../img/logoMaipoGrande.png';
import { MaipoContext } from '../../../context/maipoContext';
import { useContext } from 'react';
import { permisos } from '../../../context/roles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/auth';
import { useMemo } from 'react';
import { ModalShopping } from './ModalShopping';

export const NavBar = () => {


    const { userName, status } = useSelector(state => state.auth);
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
    const dispatch = useDispatch();
    const { user, setUser } = useContext(MaipoContext);
    const navigate = useNavigate();

    const onCLickLogin = () => {
        navigate('/iniciarsesion');
    }

    const onClickLogout = () => {
        dispatch(logout());
        setUser({
            username: '',
            role: '',
            active: false
        });

        navigate('/iniciarsesion');

    }

    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid d-flex">
                <NavLink className="navbar-brand" to='home'>
                    <img className='logo' src={logo} />
                </NavLink>
                <div className="d-flex justify-content-end font-Inter" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item p-1">
                            <ModalShopping />
                        </li>
                        <li className="nav-item p-1">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                to='home'>
                                Home
                            </NavLink>
                        </li>

                        {
                            (user.role === permisos.ROLE_ADMIN || user.role === permisos.ROLE_CARRIER)
                                ?
                                <li className="nav-item p-1">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                        to='transporte'>
                                        Transporte
                                    </NavLink>
                                </li> : ''
                        }
                        {!isAuthenticated ? ''
                            : <li className="nav-item p-1">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                    to='profile'>
                                    {isAuthenticated ? userName : 'Cuenta'}
                                </NavLink>
                            </li>}

                        {
                            !isAuthenticated
                                ? <li className="nav-item p-1">
                                    <NavLink onClick={onCLickLogin} className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                        to='/iniciarsesion'>
                                        Iniciar Sesión
                                    </NavLink>
                                </li>
                                : <li className="nav-item p-1">
                                    <NavLink onClick={onClickLogout} className={({ isActive }) => `nav-link ${isActive ? 'active text-active fw-semibold' : ''}`}
                                        to='/iniciarsesion'>
                                        Logout
                                    </NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
