import { useContext } from 'react';
import jwt_decode from "jwt-decode";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import { useForm } from '../../../hooks/useForm';
import { loginApi } from '../../../helpers/auth';
import { MaipoContext } from '../../../context/maipoContext';

export const Login = () => {

    const {setUser} = useContext(MaipoContext);
    const navigate = useNavigate();


    const { formState, onInputChange} = useForm({
        username: '',
        password: ''
    });

    const onClickLogin = async (e) => {
        e.preventDefault();

        const user = {
            userName: formState.username,
            password: formState.password
        }


        const token = await loginApi(user);
        
        localStorage.setItem('token', token);

        const dectoken = jwt_decode(token);
        console.log(dectoken);

        const {sub, roles} = dectoken;

        setUser({
            username: sub,
            role: roles[0]?.authority,
            active: true
        });

        navigate('/cuenta');

    }


    return (
        <div className="login-contenedor p-4">
            <h3>Iniciar Sesión</h3>
            <form >
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                        type="text"
                        value={formState.username}
                        onChange={onInputChange}
                        name="username"
                        className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input 
                        type="password" 
                        value={formState.password}
                        onChange={onInputChange}
                        name="password"
                        className="form-control"></input>
                </div>
                <div className="mb-3 form-check">
                </div>

                <Link to='/cuenta' onClick={onClickLogin} type="submit" className="btn btn-form fw-semibold font-Jaldi">Iniciar Sesión</Link>
            </form>
        </div>
    )
}
